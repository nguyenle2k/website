import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/component/home/home.component';
import { FooterComponent } from './routing/component/footer/footer.component';
import { LongformComponent } from './routing/pages/longform/longform.component';
import { MainComponent } from './routing/component/main/main.component';
import { PlaceholderComponent } from './routing/pages/placeholder/placeholder.component';
import { Longform1Component } from './routing/pages/longform1/longform1.component';
import { OverviewComponent } from './routing/pages/overview/overview.component';
import { PagenotfoundComponent } from './routing/component/pagenotfound/pagenotfound.component';
import { TemplateDrivenFormComponent } from './routing/component/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './routing/component/reactive-form/reactive-form.component';
import { ContactComponent } from './routing/pages/contact/contact.component';
const routes: Routes = [
  { path: '', 
  component: MainComponent,
  children: [
    { path: '', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'reactiveform', component: ReactiveFormComponent},
    { path: 'templateform', component: TemplateDrivenFormComponent},
    { path: 'overview', component: OverviewComponent},
    { path: 'placeholder', component: PlaceholderComponent},
    { path: 'home', component: HomeComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'longform', component: LongformComponent},
    { path: 'longform1', component: Longform1Component},
    { path: '**', component: PagenotfoundComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
