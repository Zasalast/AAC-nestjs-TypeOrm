import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { Actividad } from './actividad.entity';
import { ActividadRO,ActividadesRO } from './actividad.interface';
import { UserEntity  } from '../user/user.entity';
import {  CreateActividadDto} from './dto';
const slug = require('slug');
@Injectable()
export class ActividadService {
  constructor(
    @InjectRepository(Actividad)
    private readonly actividadRepository: Repository<Actividad>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<Actividad[]> {
    return await this.actividadRepository.find();
  }


  async findOne(where): Promise<ActividadRO> {
    const actividad = await this.actividadRepository.findOne(where);
    return {actividad};
  }
  

  async create(userId: number, actividadData: CreateActividadDto): Promise<Actividad> {

    let actividad = new Actividad();
     
    actividad.description = actividadData.description;
    actividad.slug = this.slugify(actividadData.actividadcurricular);
   

    const newActividad = await this.actividadRepository.save(actividad);

    const author = await this.userRepository.findOne({ where: { id: userId } });

    if (Array.isArray(author.actividades)) {
      author.actividades.push(actividad);
    } else {
      author.actividades = [actividad];
    }

    await this.userRepository.save(author);

    return newActividad;

  }

  async update(slug: string, actividadData: any): Promise<ActividadRO> {
    let toUpdate = await this.actividadRepository.findOne({ slug: slug});
    let updated = Object.assign(toUpdate, actividadData);
    const actividad = await this.actividadRepository.save(updated);
    return {actividad};
  }

  async delete(slug: string): Promise<DeleteResult> {
    return await this.actividadRepository.delete({ slug: slug});
  }

  slugify(actividadcurricular: string) {
    return slug(actividadcurricular, {lower: true}) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36)
  }
}
