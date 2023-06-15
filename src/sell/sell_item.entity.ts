/* eslint-disable prettier/prettier */
import { Product } from 'src/product/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sell } from './sell.entity';

@Entity()
export class SellItem {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Sell, (sell) => sell.sellItems)
  sell: Sell;
  @ManyToOne(() => Product, (product) => product.sellItems)
  product: Product;
  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  unitPrice: number;
  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  qty: number;
  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  subTotal: number;
}
