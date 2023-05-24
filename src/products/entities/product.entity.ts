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
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    example: '8339433E-F36B-1410-8E88-001B7C49B22D',
    description: 'Product ID',
    uniqueItems: true,
  })
  id: string;

  @Column({ type: 'varchar', unique: true })
  @ApiProperty({
    example: 'Figura Funko',
    description: 'Product title',
    uniqueItems: true,
  })
  title: string;

  @Column('float')
  @ApiProperty({
    example: 122.12,
    description: 'Product price',
  })
  price: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  @ApiProperty({
    example: 'Action Toy',
    description: 'Product description',
  })
  description: string;

  @Column('varchar')
  @ApiProperty()
  slug: string;

  @Column('int', {
    default: 0,
  })
  @ApiProperty()
  stock: number;

  @Column({
    type: 'bit',
    default: true,
  })
  @ApiProperty()
  active: boolean;

  @CreateDateColumn({ type: 'datetime2' })
  @ApiProperty()
  created_at: Date;

  // @Column('nvarchar')
  // sizes: string[];

  @Column('text')
  @ApiProperty()
  gender: string;

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }
    this.slug = this.slug.toLowerCase().replaceAll(' ', '_').replace("'", '');
  }
}
