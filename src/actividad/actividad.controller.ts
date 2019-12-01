import {Get, Post, Body, Put, Delete, Query, Param,  Controller} from '@nestjs/common';
import { Request } from 'express';
import {  ActividadService } from './actividad.service';
import {  CreateActividadDto } from './dto';
import {  Actividad } from './actividad.entity';
import {  ActividadRO, ActividadesRO } from './actividad.interface';
/* import { User } from '../user/user.decorator'; */
/* import { User } from '../user/user.decorator'; */
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('actividad')
@Controller('actividad')
export class ActividadController {
  constructor(private readonly actividadService: ActividadService) {}


  @ApiOperation({ title: 'Trae Todas las actividades' })
  @ApiResponse({ status: 200, description: 'Retorna  Todas las actividades.'})
  @Get()
  findAll(): Promise<Actividad[]> {
    return this.actividadService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug): Promise<ActividadRO>  {
    return await this.actividadService.findOne({slug});
  }

/*   @ApiOperation({ title: 'Create actividad' })
  @ApiResponse({ status: 201, description: 'The actividad has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create( @Param('actividad') actividadData: CreateActividadDto) {
    return this.actividadService.create( actividadData); 
  }  */
/*    async create(@User('id') userId: number, @Body('actividad') actividadData: CreateActividadDto) {
    return this.actividadService.create(userId, actividadData);
  } */

  @ApiOperation({ title: 'Update actividad' })
  @ApiResponse({ status: 201, description: 'The actividad has been successfully updated.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put(':slug')
  async update(@Param() params, @Body('actividad') actividadData: CreateActividadDto) {
    // Todo: update slug also when title gets changed
    return this.actividadService.update(params.slug, actividadData);
  }

  @ApiOperation({ title: 'Delete actividad' })
  @ApiResponse({ status: 201, description: 'The actividad has been successfully deleted.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':slug')
  async delete(@Param() params) {
    return this.actividadService.delete(params.slug);
  }
}
