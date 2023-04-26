import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from '../entity/cart.entity';
import { CartItemDto } from './cartItemDto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity) private readonly repo: Repository<CartEntity>,
  ) {}

  public async getAll() {
    return await this.repo.find();
  }

  public async set(dto: CartItemDto) {
    return await this.repo.save(dto);
  }

  public async delete(id: number) {
    return await this.repo.delete(id);
  }
}
