import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routing/component/home/home.component';
import { FooterComponent } from './routing/component/footer/footer.component';
import { LongformComponent } from './routing/pages/longform/longform.component';
import { MainComponent } from './routing/component/main/main.component';
import { PlaceholderComponent } from './routing/pages/placeholder/placeholder.component';
import { Longform1Component } from './routing/pages/longform1/longform1.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LongformComponent,
    MainComponent,
    PlaceholderComponent,
    Longform1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
