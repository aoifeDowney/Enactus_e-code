import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { ProductComponent } from "./components/product/product.component";
import { WaterBottleComponent } from "./components/product/waterbottle/waterbottle.component";
import { CoffeeCupComponent } from "./components/product/coffeecup/coffeecup.component";
import { CanComponent } from "./components/product/can/can.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductComponent },
  { path: "WaterBottle", component: WaterBottleComponent },
  { path: "CoffeeCup", component: CoffeeCupComponent },
  { path: "Can", component: CanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
