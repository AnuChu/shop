import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItemDto } from './cartItemDto';

@Controller(`cart`)
export class CartController {
  constructor(private serv: CartService) {}

  @Get()
  getAll() {
    return this.serv.getAll();
  }

  @Post()
  set(@Body() dto: CartItemDto) {
    return this.serv.set(dto).then(() => 'ok');
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.serv.delete(id).then(() => 'ok');
  }
}
