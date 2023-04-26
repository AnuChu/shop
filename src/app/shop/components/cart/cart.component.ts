import {Component, OnInit} from '@angular/core';
import {GoodsService} from "../../../../shared/service/goods.service";
import {CartService} from "../../../../shared/service/cart.service";
import {IUserCart} from "../../../../shared/interface/IUserCart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  products: IUserCart[] | null
  total: number = 0

  constructor(private productsService: GoodsService, private cartService: CartService) {}

  private update() {
    let cart = this.cartService.getCart()
    this.products = Array.from(cart.values())
    this.total = this.products.reduce((acc, value) => acc + (value.price * value.count), 0)
  }

  ngOnInit(): void {
    this.update();
    console.log(this.products)
  }

  handleDelete() {
    this.update()
  }

  handleChange() {
    this.update()
  }
}
