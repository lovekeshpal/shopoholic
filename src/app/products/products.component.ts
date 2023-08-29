import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product.interface'; 
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
  constructor( private dataService:DataService){}
 


  ngOnInit() {
    this.dataService.getProducts(this.pathurl).subscribe(
      (data: Product[]) => {
        this.products = data;
        this.filteredProducts = data; 
      },
      error => {
        console.error('Error fetching products:', error);
      }
     
    );
  }
  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchInput.toLowerCase())
    );
      }
    
}