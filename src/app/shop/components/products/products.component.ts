import {Component, OnInit} from '@angular/core';
import {GoodsService} from "../../../../shared/service/goods.service";
import {IUserCart} from "../../../../shared/interface/IUserCart";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit{
  products: IUserCart[]

  constructor(private productsService: GoodsService) {}
  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products.map(value => {return {...value, count: 0}})
    })
  }


}
