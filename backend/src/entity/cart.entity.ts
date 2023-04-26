import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cart' })
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'int' })
  count: number;
}
