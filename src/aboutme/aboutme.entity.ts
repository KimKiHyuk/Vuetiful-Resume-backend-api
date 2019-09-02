import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class aboutmeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    greet: string;

    @Column('text')
    introduce: string;

    @Column()
    job: string;

    @Column()
    name: string;

    @Column()
    nation: string;
}