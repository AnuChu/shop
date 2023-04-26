import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../../../shared/interface/IProduct";
import {SwitcherService} from "../../../../shared/service/switcher.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CartService} from "../../../../shared/service/cart.service";
import {IUserCart} from "../../../../shared/interface/IUserCart";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit{
  @Input() product: IUserCart
  @Output() deleteEvent = new EventEmitter<void>()
  @Output() changeEvent = new EventEmitter<void>()
  constructor(protected switcher: SwitcherService, protected cartService: CartService) {}

  handleAdd(product: IProduct, count: number) {
    let userCart: IUserCart = {...product, count}
    this.cartService.set(userCart)
  }

  ngOnInit(): void {
    let userCart: IUserCart | undefined = this.cartService.get(this.product.id)
    if (userCart?.count != undefined) {
      this.formAdd.controls.count.setValue(userCart?.count!)
    }

    if (this.product.count != 0) {
      this.formAdd.controls.count.valueChanges.subscribe((value) => this.handleChange(value))
    }
  }

  formAdd = new FormGroup({
    count: new FormControl(1),
  });

  handleDelete(){
    this.cartService.delete(this.product.id)
    this.deleteEvent.emit()
  }

  handleChange(value: number | null) {
    this.product.count = value!
    this.cartService.set(this.product)
    this.changeEvent.emit()
  }

}
