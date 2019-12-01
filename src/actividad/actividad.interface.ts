import { UserData } from '../user/user.interface';
import { Actividad } from './actividad.entity';
 
interface ActividadData {
  slug: string;
  actividadcurricular: string;
  encargado: string;
  fecha: string;
  hora: string;
  prioridad: string;
  estado: boolean;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  author?: UserData;
}

export interface ActividadRO {
    actividad: Actividad;
}

export interface ActividadesRO {
    actividades: Actividad[];
  actividadesCount: number;
}
