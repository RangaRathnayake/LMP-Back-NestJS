/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  async save(product): Promise<Product> {
    try {
      return await this.productRepository.save(product);
    } catch (error) {
      console.log(error);
      return error;
    }

  }

  async update(product): Promise<Product> {
    try {
      return await this.productRepository.save(product);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['unit'], order: { name: 'ASC' }, where: { status: '1' } });
  }

  async getById(id): Promise<Product> {
    return this.productRepository.findOne(id);
  }
}
