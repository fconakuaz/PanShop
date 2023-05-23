import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  title: string;

  @Column('float')
  price: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column('varchar')
  slug: string;

  @Column('int', {
    default: 0,
  })
  stock: number;

  @Column({
    type: 'bit',
    default: true,
  })
  active: boolean;

  @CreateDateColumn({ type: 'datetime2' })
  created_at: Date;

  // @Column('nvarchar')
  // sizes: string[];

  @Column('text')
  gender: string;

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }
    this.slug = this.slug.toLowerCase().replaceAll(' ', '_').replace("'", '');
  }
}
