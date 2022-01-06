import { Buy } from "src/buy/buy.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Utype } from "./utype.entity";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    passowrd: string;
    @Column({ nullable: true })
    authcode: string;
    @Column({ nullable: true })
    mobile: string;
    @Column({ nullable: true })
    created: string;
    @Column({ nullable: true })
    updated: string;
    @Column({ default: 1 })
    status: number;
    @ManyToOne(() => Utype, utype => utype.users)
    utype: Utype;
    @OneToMany(() => Buy, buy => buy.user)
    buys: Buy[];

}