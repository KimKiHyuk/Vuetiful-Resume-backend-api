import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class aboutmeData {
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