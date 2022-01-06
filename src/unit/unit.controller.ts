import { Body, Controller, Get, Post } from '@nestjs/common';
import { UnitService } from './unit.service';

@Controller('unit')
export class UnitController {
    constructor(private unitService: UnitService) { }
    
    @Post('save')
    async save(@Body('unit') unit) {
        return await this.unitService.save(unit);
    }

    @Get('all')
    async getAll() {
        return await this.unitService.getAll();
    }
}
