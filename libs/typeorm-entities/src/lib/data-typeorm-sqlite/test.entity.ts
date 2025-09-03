import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'test' })
export class TestEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    name: 'time',
    type: 'integer',
    nullable: false,
  })
  public time!: number;

}
