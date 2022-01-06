import { Product } from "src/product/product.entity";
import { Unit } from "src/unit/unit.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Buy {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    customer: number;
    @ManyToOne(() => User, user => user.buys)
    user: User;
    @Column({ type: 'datetime' })
    date: string;
    @ManyToOne(() => Product, product => product.buys)
    product: Product;
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