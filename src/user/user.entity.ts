import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany} from "typeorm";
import * as crypto from 'crypto';
import { Actividad } from '../actividad/actividad.entity';
import { IsEmail, Validate } from 'class-validator';
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  username: string;

  @Column()
  @IsEmail()
  email: string;
  
  @Column({default: ''})
  bio: string;

  @Column({default: ''})
  imagen: string;

  @Column( )
  password: string;

  @Column()
  estado: boolean;

  @Column({default: ''})
  description: string;

 /*  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  } */

  @OneToMany(type => Actividad, actividad => actividad.author)
  actividades: Actividad[];
}
