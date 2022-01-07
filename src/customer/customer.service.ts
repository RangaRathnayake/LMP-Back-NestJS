import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(Customer) private readonly customerRepository: Repository<Customer>) { }

    async save(customer): Promise<Customer> {
        return await this.customerRepository.save(customer);
    }

    async getAll() {
        return await this.customerRepository.find()
    }

    async getById(id) {
        return await this.customerRepository.findOne(id);
    }

    async getByMobile(mobile) {
        return await this.customerRepository.find({ where: { mobile: mobile } })
    }


}
