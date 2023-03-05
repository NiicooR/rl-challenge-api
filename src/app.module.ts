import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoolModule } from './pool/pool.module';
import { ConfigModule } from '@nestjs/config';

console.log(process.env);

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: Boolean(process.env.POSTGRES_AUTO_LOAD),
      logging: Boolean(process.env.POSTGRES_LOGGING),
      synchronize: Boolean(process.env.POSTGRES_SYNCHRONIZE),
    }),
    PoolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
