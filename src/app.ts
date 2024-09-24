import { Module } from '@nestjs/common';
import { CarModule } from './models';
import { CustomerModule } from './models/customers';
import { OrderModule } from './models/orders';

@Module({
  imports: [CarModule,CustomerModule,OrderModule],
})
export class AppModule {}
