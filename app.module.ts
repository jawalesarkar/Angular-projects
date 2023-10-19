import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCmpComponent } from './first-cmp/first-cmp.component';
import { SecondCmpComponent } from './second-cmp/second-cmp.component';
import { ThirdCmpComponent } from './third-cmp/third-cmp.component';
import { FourthCmpComponent } from './fourth-cmp/fourth-cmp.component';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
