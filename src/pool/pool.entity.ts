import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  apy: number;
}
