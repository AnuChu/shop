import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CartModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
