import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BuyService } from './buy.service';

@Controller('buy')
export class BuyController {
    constructor(
        private buyService: BuyService
    ) { }

    @Post('save')
    async save(@Body('buy') buy) {
        console.log(buy);
        return await this.buyService.save(buy);
    }

    @Get('all')
    async getAll() {
        return await this.buyService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id) {
        return await this.buyService.getById(id);
    }

}
