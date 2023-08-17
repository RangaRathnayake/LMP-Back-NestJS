import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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

    @Get('allByDate/:date')
    async getByDate(@Param('date') date) {
        return await this.buyService.getByDate(date);
    }

    @Get('ByDateRange/:sDate&:eDate')
    async getByDateRange(@Param('sDate') sDate, @Param('eDate') eDate) {
        return await this.buyService.getByDateRange(sDate, eDate);
    }

    @Get(':id')
    async getById(@Param('id') id) {
        return await this.buyService.getById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newCat: any = await this.buyService.update(id, body)
        return "Receipt Cancelled";
    }

}
