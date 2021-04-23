import { Component, OnInit } from '@angular/core';
import { categories } from '../categories';
import {Category} from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories = categories
  category: Category;

  constructor() { }

  categorySelected(category: Category): void {
    this.category = category
  }

  ngOnInit(): void {
  }

}
