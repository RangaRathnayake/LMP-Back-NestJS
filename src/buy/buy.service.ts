import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buy } from './buy.entity';

@Injectable()
export class BuyService {
    constructor(
        @InjectRepository(Buy) private readonly buyRepository: Repository<Buy>
    ) { }

    async save(buy): Promise<Buy> {
        return await this.buyRepository.save(buy);
    }

    async getAll() {
        return await this.buyRepository.find()
    }

    async getById(id) {
        return await this.buyRepository.findOne(id);
    }

}
