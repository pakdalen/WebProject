import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Item } from './item';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(id: number): Observable<Item[]> {
    const gotItems = items.filter(i => i.category === id) as Item[];
    return of(gotItems);
  }

  getProduct(id: number): Observable<Item> {
    const item = items.find(i => i.id === id) as Item;
    return of(item);
  }
}
