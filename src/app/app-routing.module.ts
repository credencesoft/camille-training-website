import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { PackagesComponent } from './packages/packages.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutComponent },
  { path: 'workout', component: WorkoutsComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
