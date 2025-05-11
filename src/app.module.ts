import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipmentModule } from './equipment/equipment.module';
import { ClaimModule } from './claim/claim.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

/**
 * 
sudo docker run -d \
  --rm \
  --name my-mongo \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=user \
  -e MONGO_INITDB_ROOT_PASSWORD=utec2025 \
  -e MONGO_INITDB_DATABASE=sistema_equipaje \
  mongo:latest
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const user = config.get('MONGO_USER');
        const pass = config.get('MONGO_PASSWORD');
        const host = config.get('MONGO_HOST');
        const port = config.get('MONGO_PORT');
        const db   = config.get('MONGO_DATABASE');
        const auth = user && pass ? `${user}:${pass}@` : '';
        return {
          uri: `mongodb://${auth}${host}:${port}/${db}?authSource=admin`,
        };
      }
    }),
    EquipmentModule,
    ClaimModule
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
