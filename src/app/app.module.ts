import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { ObservablesComponent } from './components/observables/observables.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
