import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quality } from './quality.entity';
import { Product } from './product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Quality,Product])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
