import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './routing/component/home/home.component';
import { FooterComponent } from './routing/component/footer/footer.component';
import { LongformComponent } from './routing/pages/longform/longform.component';
import { MainComponent } from './routing/component/main/main.component';
import { Longform1Component } from './routing/pages/longform1/longform1.component';
import { OverviewComponent } from './routing/pages/overview/overview.component';
import { PlaceholderComponent } from './routing/pages/placeholder/placeholder.component';
import { PagenotfoundComponent } from './routing/component/pagenotfound/pagenotfound.component';
import { HighlightDirective } from './routing/component/Directives/highlight.directive';
import { TemplateDrivenFormComponent } from './routing/component/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './routing/component/reactive-form/reactive-form.component';
import { ContactComponent } from './routing/pages/contact/contact.component';
import { GetDataComponent } from './routing/component/get-data/get-data.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LongformComponent,
    MainComponent,
    PlaceholderComponent,
    Longform1Component,
    OverviewComponent,
    PagenotfoundComponent,
    HighlightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ContactComponent,
    GetDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
