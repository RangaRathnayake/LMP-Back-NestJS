/* eslint-disable prettier/prettier */
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BuyItem } from './buy_item.entity';

@Entity()
export class Buy {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  customer: number;
  @ManyToOne(() => User, (user) => user.buys)
  user: User;
  @Column({ type: 'date' })
  date: string;
  @Column({ type: 'time' })
  time: string;
  @OneToMany(() => BuyItem, (buyItem) => buyItem.buy)
  buyItems: BuyItem[];

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  total: number;
  @Column()
  status: number;
}
