import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  cartItemCount: number = 0;
  products:Product[] = [];
  filteredProducts:any;
  searchInput: string = '';
  allProducts : Product[]=[];
  pathurl: string = 'products'

  constructor(private cartService: CartService, private dataService: DataService,
              private router: Router) {}

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cartService.cartItemAdded.subscribe(() => {
      this.cartItemCount = this.cartService.getCartItemCount();
    }); 
    
    this.dataService.getProducts(this.pathurl).subscribe({
      next: (data) => {
        this.products = data;
      this.filteredProducts = data; 
      },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
    })
  }
  
  updateCartItemCount() {
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  goToDetails(title: string){
    // this.router.navigateByUrl('product')
    this.filteredProducts = this.products.filter(item => item.category === title);
  }
}
