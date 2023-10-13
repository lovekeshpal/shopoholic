import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  pathurl: string = 'products';
  category: string = '';
  constructor( private dataService:DataService, private cartService:CartService, private router: Router,
            private route: ActivatedRoute){}
 


  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => {
      this.category = data.get('category')
    })
    console.log(this.category)
    // this.category = this.route.snapshot.paramMap.get('category');
    this.fetchProducts(this.category);

    // this.cartService.getCartItems();

    // this.dataService.getProducts(this.pathurl).subscribe({
    //   next: (data) => {
    //     this.products = data;
    //   this.filteredProducts = data; 
    //   },
    // error: (e) => console.error(e),
    // complete: () => console.info('complete')
    // }
     
    // );
  }
  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.category.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }
  addToCart(product:Product){
   
  this.cartService.addToCart(product);
  console.log('Cart items:', this.cartService.getCartItems());
  }  
  
  fetchProducts(category: string){
    this.dataService.fetchProductsByCategory(category).subscribe(data => {
      this.filteredProducts = data
    })
  }
  
    
}