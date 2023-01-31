import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/component/home/home.component';
import { FooterComponent } from './routing/component/footer/footer.component';
import { LongformComponent } from './routing/pages/longform/longform.component';
import { MainComponent } from './routing/component/main/main.component';
import { PlaceholderComponent } from './routing/pages/placeholder/placeholder.component';
import { Longform1Component } from './routing/pages/longform1/longform1.component';
import { OverviewComponent } from './routing/pages/overview/overview.component';
const routes: Routes = [
  { path: '', 
  component: MainComponent,
  children: [
    { path: '', component: HomeComponent},
    { path: 'overview', component: OverviewComponent},
    { path: 'placeholder', component: PlaceholderComponent},
    { path: 'home', component: HomeComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'longform', component: LongformComponent},
    { path: 'longform1', component: Longform1Component},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
