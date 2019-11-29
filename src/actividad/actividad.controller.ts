import { Controller, Get } from '@nestjs/common';
import {  ActividadService } from './actividad.service';
import {  Actividad } from './actividad.entity';

@Controller('actividad')
export class ActividadController {
  constructor(private readonly actividadService: ActividadService) {}

  @Get()
  findAll(): Promise<Actividad[]> {
    return this.actividadService.findAll();
  }
}
