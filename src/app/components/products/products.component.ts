import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products:Product[] = [];
  filteredProducts:Product[]=[];
  searchInput: string = '';
  allProducts : Product[]=[];
  pathurl: string = 'products'
  constructor( private dataService:DataService, private cartService:CartService){}
 


  ngOnInit() {

    this.cartService.getCartItems();

    this.dataService.getProducts(this.pathurl).subscribe({
      next: (data) => {
        this.products = data;
      this.filteredProducts = data; 
      },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
    }
     
    );
  }
  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchInput.toLowerCase())
    );
      }
  addToCart(product:Product){
   
  this.cartService.addToCart(product);
  console.log('Cart items:', this.cartService.getCartItems());
  }    
  
    
}