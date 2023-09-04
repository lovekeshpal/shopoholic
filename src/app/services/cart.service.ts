import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  cartItemAdded = new EventEmitter<void>();
  
  addToCart(product: Product) {
    this.cartItems.push(product);
    localStorage.setItem("cartItems",JSON.stringify(this.cartItems));
    this.cartItemAdded.emit();
    
  }

  // getCartItems() {
  //   this.cartItems=JSON.parse(localStorage.getItem("cartItems"));
  //   return this.cartItems;
  // }
  getCartItems() {
    const cartItemsJSON = localStorage.getItem("cartItems");
    
    if (cartItemsJSON !== null) {
      console.log('Getting it from Local Storage');
      this.cartItems = JSON.parse(cartItemsJSON);
      return this.cartItems;
    } else {
    return this.cartItems;
    }
  }

  getCartItemCount() {
    const cartItemsJSON = localStorage.getItem("cartItems");
    
    if (cartItemsJSON !== null) {
      console.log('Getting it from Local Storage');
      this.cartItems = JSON.parse(cartItemsJSON);
      return this.cartItems.length;
    } else {
    return this.cartItems.length;
    }

  }
  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      this.cartItemAdded.emit(); 
    }
  }
}
