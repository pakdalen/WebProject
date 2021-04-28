import { Component, OnInit } from '@angular/core';
import { categories } from '../categories';
import {Category} from '../category';
import { CategoryService } from '../category.service'
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories = categories;
  category: Category;

  constructor(private categoryService: CategoryService) { }

  categorySelected(category: Category): void {
    this.category = category
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(res => {
      this.categories = res
    })
  }
}
