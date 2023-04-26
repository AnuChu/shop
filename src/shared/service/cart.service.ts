import {Injectable} from '@angular/core';
import {IUserCart} from "../interface/IUserCart";

const localStorageCart = 'cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  get(id: number) {
    const cart = this.getCart()
    return cart.get(id.toString())
  }

  getCart(): Map<string, IUserCart> {
    let cart = localStorage.getItem(localStorageCart)
    if (cart === null) {
      let cartMap = new Map<string, IUserCart>()
      localStorage.setItem(localStorageCart, JSON.stringify(cartMap))
    }
    return new Map<string, IUserCart>(Object.entries(JSON.parse(localStorage.getItem(localStorageCart)!)))
  }

  set(userCart: IUserCart) {
    const cart = Object.fromEntries(this.getCart()!)
    const id = userCart.id.toString()
    cart[id] = userCart
    localStorage.setItem(localStorageCart, JSON.stringify(cart))
  }

  delete(id: number) {
    const cart = this.getCart()!
    cart.delete(id.toString())
    localStorage.setItem(localStorageCart, JSON.stringify(Object.fromEntries(cart)))
  }
}
