import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { Product } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { Sell } from './sell.entity';
import { SellItem } from './sell_item.entity';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class SellService {
    constructor(
        @InjectRepository(Sell) private readonly sellRepository: Repository<Sell>,
        @InjectRepository(SellItem) private readonly itemRepository: Repository<SellItem>,
        private readonly productService: ProductService,
    ) { }

    async save(sell) {
        let s = await this.sellRepository.save(sell);
        sell.sellItems.forEach(async element => {
            element.sell = s.id;
            await this.itemRepository.save(element);
            let p = await this.productService.getById(element.product.id);
            p.stock = Number(p.stock) - Number(element.qty);
            p.selling_price = element.unitPrice;
            await this.productService.update(p);
        });
        return await s;
    }

    async getAll() {
        return await this.sellRepository.find({ relations: ['sellItems'] });
    }

    async getById(id) {
        const s: Sell = await this.sellRepository.findOne(id, { relations: ['sellItems'] });
        const i = await this.itemRepository.find({ relations: ['product'], where: { sell: id } });
        s.sellItems = i;
        return s;
    }

}
