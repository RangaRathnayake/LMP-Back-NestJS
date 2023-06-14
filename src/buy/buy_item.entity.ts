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
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  unitPrice: number;
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  qty: number;
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  wastage: number;
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  subTotal: number;
}
