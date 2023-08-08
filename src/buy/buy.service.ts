/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buy } from './buy.entity';
import { BuyItem } from './buy_item.entity';
import { ProductService } from 'src/product/product.service';


@Injectable()
export class BuyService {
  constructor(
    @InjectRepository(Buy) private readonly buyRepository: Repository<Buy>,
    @InjectRepository(BuyItem) private readonly buyItemRepo: Repository<BuyItem>,
    private readonly productService: ProductService,

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
        bi.wastage = element.wastages;
        await this.buyItemRepo.save(bi);
        let p = await this.productService.getById(element.product);
        console.log(p);
        p.stock = Number(p.stock) + Number(element.qty);
        p.buying_price = element.unitPrice;
        console.log(p)
        await this.productService.update(p);
      });
      return b;
    } catch (error) {
      console.log(error);
    }

  }

  async getAll() {
    // return buy data with buyItems
    // return await this.buyRepository.find({ relations: ['buyItems',] });
    const query = this.buyRepository.query('SELECT buy.id, customer.`name` AS cus_name, customer.mobile AS cus_mobile, buy.date, product.`name` AS product_name, product.quality AS product_quality, buy_item.unitPrice, buy_item.qty, buy_item.wastage, buy_item.subTotal, buy.total FROM buy INNER JOIN customer ON buy.customer = customer.id INNER JOIN buy_item ON buy_item.buyId = buy.id INNER JOIN product ON buy_item.productId = product.id WHERE buy.`status` = "1"');
    return query;
  }

  async getByDate(date) {
    // return buy data with buyItems
    // return await this.buyRepository.find({ relations: ['buyItems',] });
    const query = this.buyRepository.query('SELECT buy.id, customer.`name` AS cus_name, customer.mobile AS cus_mobile, buy.date, buy.time, product.`name` AS product_name, product.quality AS product_quality, buy_item.unitPrice, buy_item.qty, buy_item.wastage, buy_item.subTotal, buy.total FROM buy INNER JOIN customer ON buy.customer = customer.id INNER JOIN buy_item ON buy_item.buyId = buy.id INNER JOIN product ON buy_item.productId = product.id WHERE buy.`status` = "1" AND buy.date = "' + date + '"');
    return query;
  }

  async getById(id) {
    return await this.buyRepository.findOne(id);
  }
}
function InjectDataSource(): (target: typeof BuyService, propertyKey: undefined, parameterIndex: 3) => void {
  throw new Error('Function not implemented.');
}

