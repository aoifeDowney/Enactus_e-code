import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { ProductComponent } from "./components/product/product.component";
import { WaterBottleComponent } from "./components/product/waterbottle/waterbottle.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductComponent },
  { path: "WaterBottle", component: WaterBottleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
