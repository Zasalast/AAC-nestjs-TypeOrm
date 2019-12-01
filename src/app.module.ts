import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {   Actividad } from './actividad/actividad.entity';
import {   UserEntity } from './user/user.entity';
import {   UserModule } from './user/user.module';
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
      database: 'AAC',
      entities: [Actividad,UserEntity],
      synchronize: true,
    }),
    ActividadModule, UserModule
  ],
})
export class AppModule {  constructor(private readonly connection: Connection) {}}
