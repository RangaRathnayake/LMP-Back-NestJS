import { Buy } from "src/buy/buy.entity";
import { Unit } from "src/unit/unit.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    @Column()
    status: string;
    @OneToMany(() => Buy, buy => buy.product)
    buys: Buy[];
    @ManyToOne(() => Unit, unit => unit.products)
    unit: Unit;
}