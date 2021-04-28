import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Item } from './item';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private backend = 'http://localhost:8000/api/products/'
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  
  GetList(): Observable<any[]> {
    return this.http.get<any[]>(this.backend)
  }

  GetByCategory(id): Observable<any[]> {
    return this.http.get<any[]>(this.backend + id)
  }

  GetBySubcat(id): Observable<any[]> {
    return this.http.post<any[]>(this.backend + 'subcategory/', {id} , this.httpHeaders)
  }

  GetOrderList(): Observable<any[]> {
    return this.http.get<any[]>(this.backend+'orders/')
  }
  
  OrderProducts(orderInfo): Observable<any> {
    return this.http.post<any>(this.backend+'orders/', {...orderInfo}, this.httpHeaders)
  }

  Search(query): Observable<any[]> {
    return this.http.post<any[]>(this.backend + 'search', {query: query}, this.httpHeaders)
  }

  Create(product): Observable<any> {
    return this.http.post<any>(this.backend, {...product}, this.httpHeaders)
  }

  Delete(id): Observable<any> {
    return this.http.delete<any>(this.backend + 'update/' + id)
  }

  update(prod): Observable<any> {
    return this.http.put<any>(this.backend + 'update/' + prod.id + '/', {...prod}, this.httpHeaders)
  }
}
