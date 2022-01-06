import { Module } from '@nestjs/common';
import { BuyService } from './buy.service';
import { BuyController } from './buy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buy } from './buy.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Buy])],
  providers: [BuyService],
  controllers: [BuyController]
})
export class BuyModule {}
