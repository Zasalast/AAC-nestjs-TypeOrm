import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {   Actividad } from './actividad/actividad.entity';
import { ActividadModule } from './actividad/actividad.module';
import { Connection } from 'typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Actividad],
      synchronize: true,
    }),
    ActividadModule,
  ],
})
export class AppModule {  constructor(private readonly connection: Connection) {}}
