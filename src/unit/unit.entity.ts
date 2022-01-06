import { Product } from "src/product/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Unit {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    unit: string;
    @OneToMany(() => Product, product => product.unit)
    products: Product[];
}