import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Actividad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  actividadcurricular: string;

  @Column({ length: 500 })
  encargado: string;

  
  @Column('text')
  fecha: string;

  @Column('text')
  hora: string;

  @Column('text')
  prioridad: string;

  @Column()
  estado: boolean;

  @Column('text')
  description: string;
}
