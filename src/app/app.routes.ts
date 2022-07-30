import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { InterpolationComponent } from "./components/interpolation/interpolation.component";
import { ObservablesComponent } from "./components/observables/observables.component";
import { ReactiveFormsComponent } from "./components/reactive-forms/reactive-forms.component";

export const rootRouterConfig : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: "home", component:  HomeComponent},
  { path: "interpolation", component:  InterpolationComponent},
  { path: "observables", component:  ObservablesComponent},
  { path: "reactive-forms", component:  ReactiveFormsComponent},
]
