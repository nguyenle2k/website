import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlaceholderComponent } from './placeholder/placeholder.component';

import { HomeComponent } from './routing/component/home/home.component';
import { FooterComponent } from './routing/component/footer/footer.component';
import { LongformComponent } from './routing/pages/longform/longform.component';
import { MainComponent } from './routing/component/main/main.component';
import { PlaceholderComponent } from './routing/pages/placeholder/placeholder.component';
import { Longform1Component } from './routing/pages/longform1/longform1.component';
import { OverviewComponent } from './routing/pages/overview/overview.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    PlaceholderComponent

    HomeComponent,
    FooterComponent,
    LongformComponent,
    MainComponent,
    PlaceholderComponent,
    Longform1Component,
    OverviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
