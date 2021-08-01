import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class ProgrammingLanguage extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column('varchar', { default: 'undefined' })
  first_appeared?: string;

  @Field({ nullable: true })
  @Column('varchar', { default: 'undefined' })
  designed_by?: string;

  @Field({ nullable: true })
  @Column('varchar', { default: 'undefined' })
  typing?: string;

  @Field({ nullable: true })
  @Column('varchar', { default: 'undefined' })
  stable_release?: string;

  @Field({ nullable: true })
  @Column('varchar', { default: 'undefined' })
  os?: string;
}
