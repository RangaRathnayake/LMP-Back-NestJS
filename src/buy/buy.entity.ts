/* eslint-disable prettier/prettier */
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BuyItem } from './buy_item.entity';

@Entity()
export class Buy {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  customer: number;
  @ManyToOne(() => User, (user) => user.buys)
  user: User;
  @Column({ type: 'datetime' })
  date: string;
  @ManyToOne(() => BuyItem, (buyItem) => buyItem.buy)
  buyItems: BuyItem[];
  @Column()
  qty: number;
  @Column()
  unit: number;
  @Column()
  unitPrice: number;
  @Column()
  total: number;
  @Column()
  status: number;
}
