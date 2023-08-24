import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  constructor(private http:HttpClient){}

 
  filteredProducts:any = [];
  allProducts:any= [];
  searchInput="";

  ngOnInit():void{
   this.http.get("https://fakestoreapi.com/products").subscribe(
    (res)=>{
      this.filteredProducts = res;
      this.allProducts=res;
    }
   )
  }
  filterProducts(){
   this.filteredProducts=this.allProducts.filter(
    (P: { title: string; })=>{
      return P.title.toLowerCase().includes(this.searchInput)
    }
   )
  }
}
