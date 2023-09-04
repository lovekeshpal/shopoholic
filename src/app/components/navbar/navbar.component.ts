import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cartService.cartItemAdded.subscribe(() => {
      this.cartItemCount = this.cartService.getCartItemCount();
    });  
  }
  
  updateCartItemCount() {
    this.cartItemCount = this.cartService.getCartItemCount();
  }
}
