import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // username: 'visiwxsf_loan',
      password: 'root',
      // password: 'iM*eiFwgt4',
      database: 'lmp_traders',
      // database: 'visiwxsf_loan',
      entities: [],
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    CustomerModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
