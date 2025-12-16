import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
})
export class Products {

  data: any;
  products: any;

  constructor(private http: HttpClient) {}

  loadData() {
    this.http.get('/api/ClientStrive/GetAllRoles')
      .subscribe(res => {
        console.log(res);
        this.data = res;
      });
  }

    loadProducts() {
    this.http.get<any>('https://dummyjson.com/products')
      .subscribe(res => {
        console.log(res);
        this.data = res;
      });
  }
}
