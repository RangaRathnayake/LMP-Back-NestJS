/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BuyService } from './buy.service';
import { BuyController } from './buy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buy } from './buy.entity';
import { BuyItem } from './buy_item.entity';
import { Product } from 'src/product/product.entity';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Buy, BuyItem, Product])],
  providers: [BuyService, ProductService],
  controllers: [BuyController],
})
export class BuyModule { }
