import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Item } from '../item';
import { ProductService } from '../product.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  item: Item;
  @Output() removeItem = new EventEmitter<Item>();

  constructor(private route: ActivatedRoute, private productService: ProductService,
              private location: Location) {

  }
  share(): void {
    // window.alert('The product has been shared!');
    //  location.href = 'whatsapp://send?text=Message!';
     location.href = 'https://wa.me/?text=' + this.item.url;
  }
  liked(): void {
    this.item.likes = this.item.likes + 1;
  }
  remove(): void {
    this.removeItem.emit(this.item);
  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(item => this.item = item);
  }
}
