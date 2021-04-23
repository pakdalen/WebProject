import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ProductService } from '../product.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  items: Item[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService,
              private location: Location) {

  }

  removeItem(item: Item) {
    let index = this.items.findIndex(element => element === item);
    console.log(index);
    this.items.splice(index, 1);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts(id)
      .subscribe(items => this.items = items);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
