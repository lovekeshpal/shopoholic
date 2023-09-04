import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../product.interface';
import { environment } from 'src/environments/environment';
import { PathLocationStrategy } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(pathUrl:string): Observable<Product[]> {
    // console.log("products are .......",this.apiUrl+pathUrl)
    return this.http.get<Product[]>(this.apiUrl+pathUrl);
  }

}
