import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories/:id', component: ProductListComponent },
  { path: 'categories/:id/products/:id', component: ProductItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
