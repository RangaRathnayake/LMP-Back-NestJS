/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SellService } from './sell.service';
import { SellController } from './sell.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sell } from './sell.entity';
import { SellItem } from './sell_item.entity';
import { Product } from 'src/product/product.entity';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sell, SellItem, Product])],
  providers: [SellService, ProductService],
  controllers: [SellController],
})
export class SellModule { }
