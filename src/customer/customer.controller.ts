import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(
        private customerService: CustomerService
    ) { }

    @Post('save')
    async save(@Body('customer') customer) {
        return await this.customerService.save(customer);
    }

    @Get('all')
    async getAll() {
        return await this.customerService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id) {
        return await this.customerService.getById(id);
    }
}
