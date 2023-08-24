import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'', redirectTo:"productlist", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path : "productlist", component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
