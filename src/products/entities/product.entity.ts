import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  // @PrimaryColumn('numeric')
  id: string;

  @Column('text')
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
    type: 'bool',
    default: true,
  })
  active: boolean;

  // @CreateDateColumn({
  //   type: 'timestamp',
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // date_create: Date;

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
