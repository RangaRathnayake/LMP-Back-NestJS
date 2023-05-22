/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buy } from './buy.entity';
import { BuyItem } from './buy_item.entity';

@Injectable()
export class BuyService {
  constructor(
    @InjectRepository(Buy) private readonly buyRepository: Repository<Buy>,
    @InjectRepository(BuyItem) private readonly buyItemRepo: Repository<BuyItem>
  ) { }

  async save(buy): Promise<Buy> {
    try {
      const b = await this.buyRepository.save(buy);
      await buy.buyItems.forEach(async element => {
        let bi = new BuyItem()
        bi.buy = b;
        bi.product = element.product;
        bi.qty = element.qty;
        bi.subTotal = element.subTotal;
        bi.unitPrice = element.unitPrice;
        await this.buyItemRepo.save(bi);
      });
      return b;
    } catch (error) {
      console.log(error);
    }

  }

  async getAll() {
    return await this.buyRepository.find();
  }

  async getById(id) {
    return await this.buyRepository.findOne(id);
  }
}
