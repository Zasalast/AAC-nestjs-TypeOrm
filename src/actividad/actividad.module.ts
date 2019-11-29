import { Module } from '@nestjs/common';
import { ActividadService } from './actividad.service';
import { ActividadController } from './actividad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from './actividad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actividad])],
  providers: [ActividadService],
  controllers: [ActividadController],
})
export class ActividadModule {}
