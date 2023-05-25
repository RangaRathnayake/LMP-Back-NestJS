import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { BuyModule } from './buy/buy.module';
import { UnitModule } from './unit/unit.module';
import { SellModule } from './sell/sell.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      // username: 'root',
      username: 'lmptaqxv_lmpuser',
      // password: 'root',
      password: '[(W}F$2u+omJ',
      // database: 'lmp_traders',
      database: 'lmptaqxv_lmpdb',
      entities: [],
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    CustomerModule,
    ProductModule,
    BuyModule,
    UnitModule,
    SellModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
