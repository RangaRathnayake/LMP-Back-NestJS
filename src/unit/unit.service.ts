import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './unit.entity';

@Injectable()
export class UnitService {
    constructor(@InjectRepository(Unit) private readonly unitRepository: Repository<Unit>) { }

    async save(unit): Promise<Unit> {
        return await this.unitRepository.save(unit);
    }

    async getAll(): Promise<Unit[]> {
        return await this.unitRepository.find();
    }

}
