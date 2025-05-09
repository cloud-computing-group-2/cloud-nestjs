import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientProviderOptions, ClientsModule, Transport } from '@nestjs/microservices';;
import { EquipmentModule } from './equipment/equipment.module';
import { ClaimModule } from './claim/claim.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

const microservice_spring: ClientProviderOptions = 
{
  name: "cloud-spring",
  transport: Transport.REDIS,
  options: {
    host: "localhost",
    port: 3030,
  }
}

/**
 * docker run -d \
  --name my-mongo \
  -p 27017:27017 \
  mongo:latest
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // so you don't need to import ConfigModule in every module
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ClientsModule.register([ microservice_spring ]),
    EquipmentModule,
    ClaimModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
