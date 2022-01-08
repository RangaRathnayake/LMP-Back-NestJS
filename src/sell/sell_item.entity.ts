import { Product } from "src/product/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sell } from "./sell.entity";

@Entity()
export class SellItem{
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Sell, sell => sell.sellItems)
    sell: Sell;
    @ManyToOne(() => Product, product => product.sellItems)
    product: Product;
    @Column()
    unitPrice: number;
    @Column()
    qty:number;
    @Column()
    subTotal:number;
}