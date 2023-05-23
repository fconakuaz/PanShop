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

  @Column('text')
  slug: string;

  @Column('int', {
    default: 0,
  })
  stock: number;

  @Column({
    type: 'boolean',
    default: true,
  })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  // @Column('text', {
  //   array: true,
  // })
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
