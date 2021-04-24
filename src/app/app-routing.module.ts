import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'categories/:id', component: ProductListComponent },
  { path: 'categories/:id/products/:id', component: ProductItemComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forget-pass', component: ForgetPassComponent },
  { path: 'user-profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
