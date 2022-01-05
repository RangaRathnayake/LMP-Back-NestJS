import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quality{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    quality: string;

}