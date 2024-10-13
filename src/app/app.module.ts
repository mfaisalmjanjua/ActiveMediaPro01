import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  // providers: [
  //   DataService,
  //   // provideClientHydration()
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
