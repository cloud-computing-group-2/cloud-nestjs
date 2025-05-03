import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientProviderOptions, ClientsModule, Transport } from '@nestjs/microservices';
import { PassagesModule } from './passages/passages.module';

const microservice_spring: ClientProviderOptions = 
{
  name: "cloud-spring",
  transport: Transport.REDIS,
  options: {
    host: "localhost",
    port: 3030,
  }
}

@Module({
  imports: [
    ClientsModule.register([ microservice_spring ]),
    PassagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
