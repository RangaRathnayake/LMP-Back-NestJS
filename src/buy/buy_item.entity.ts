/* eslint-disable prettier/prettier */
import { Product } from 'src/product/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Buy } from './buy.entity';

@Entity()
export class BuyItem {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Buy, (buy) => buy.buyItems)
  buy: Buy;
  @ManyToOne(() => Product, (product) => product.sellItems)
  product: Product;
  @Column()
  unitPrice: number;
  @Column()
  qty: number;
  @Column()
  subTotal: number;
}
