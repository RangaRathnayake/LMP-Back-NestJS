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
    return await this.buyRepository.find({ relations: ['buyItems',] });
    // const query = this.buyRepository.query(`SELECT buy_item.id,buy_item.buyId,buy_item.productId,buy_item.unitPrice,buy_item.qty,buy_item.subTotal,buy_item.wastage,product.id,product.name,product.quality,product.sinhala,product.code,product.unitType,product.selling_price,product.buying_price,product.status,product.unitId,product.stock,buy.id,buy.customer,buy.DATE,buy.userId,buy.total FROM buy INNER JOIN buy_item ON buy.id=buy_item.buyId INNER JOIN product ON buy_item.productId=product.id`);
    // return query;
  }

  async getById(id) {
    return await this.buyRepository.findOne(id);
  }
}
function InjectDataSource(): (target: typeof BuyService, propertyKey: undefined, parameterIndex: 3) => void {
  throw new Error('Function not implemented.');
}

