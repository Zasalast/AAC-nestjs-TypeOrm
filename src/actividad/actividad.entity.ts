import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate } from 'typeorm';
import { UserEntity } from '../user/user.entity';
@Entity()
export class Actividad {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  slug: string;
  @Column({ length: 500 })
  actividadcurricular: string;

  @Column({ length: 500 })
  encargado: string;

  
  @Column('text')
  fecha: string;

  @Column('text')
  hora: string;

  @Column({default: 'Baja'})
  prioridad: string;

  @Column()
  estado: boolean;

  @Column({default: ''})
  description: string;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  created: Date;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  updated: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date;
  }
  @ManyToOne(type => UserEntity , user => user.actividades)
  author: UserEntity ;
}
