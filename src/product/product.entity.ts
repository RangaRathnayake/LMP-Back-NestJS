import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}