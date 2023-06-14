/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post('save')
  async save(@Body('product') product) {
    console.log(product);
    return await this.productService.save(product);
  }

  @Get('all')
  async getAll() {
    return await this.productService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id) {
    return await this.productService.getById(id);
  }
}
