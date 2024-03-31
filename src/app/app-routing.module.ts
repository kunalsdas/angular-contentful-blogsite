import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AibotComponent } from './aibot/aibot.component';
import { AllpostComponent } from './allpost/allpost.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ScienceallpostComponent } from './scienceallpost/scienceallpost.component';
import { SearchComponent } from './search/search.component';
import { TechnologyallpostComponent } from './technologyallpost/technologyallpost.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'technology', component: TechnologyallpostComponent },
  { path: 'science', component: ScienceallpostComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'blogPosts', component: AllpostComponent},
  { path: 'blogPost/:id', component: DetailsComponent },
 { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }