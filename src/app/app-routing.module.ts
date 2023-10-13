import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products/category/:category', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  {path:'cart',component:CartComponent},
  {path:'dashboard',component:DashboardComponent}
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload', // Add this option
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
