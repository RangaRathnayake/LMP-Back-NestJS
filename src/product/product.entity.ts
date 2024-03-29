/* eslint-disable prettier/prettier */
import { SellItem } from 'src/sell/sell_item.entity';
import { Unit } from 'src/unit/unit.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  quality: string;
  @Column()
  sinhala: string;
  @Column({ nullable: true })
  code: string;
  @Column({ nullable: true })
  unitType: string;
  @Column({ default: 0.00 })
  selling_price: number;
  @Column({ default: 0.00 })
  buying_price: number;
  @Column()
  status: string;
  @ManyToOne(() => Unit, (unit) => unit.products)
  unit: Unit;
  @OneToMany(() => SellItem, (sellItem) => sellItem.product)
  sellItems: SellItem[];
  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  stock: number;

}
