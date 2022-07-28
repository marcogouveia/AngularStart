import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { InterpolationComponent } from "./components/interpolation/interpolation.component";

export const rootRouterConfig : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: "home", component:  HomeComponent},
  { path: "interpolation", component:  InterpolationComponent},
]
