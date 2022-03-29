/* eslint-disable prettier/prettier */
import { Product } from 'src/product/product.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SellItem } from './sell_item.entity';

@Entity()
export class Sell {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  customer: number;
  @ManyToOne(() => User, (user) => user.buys)
  user: User;
  @Column({ type: 'datetime' })
  date: string;
  @OneToMany(() => SellItem, (sellItem) => sellItem.sell)
  sellItems: SellItem[];
  @Column()
  total: number;
  @Column()
  status: number;
}
