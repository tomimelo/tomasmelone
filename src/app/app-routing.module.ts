import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about-me", component: AboutMeComponent},
  {path: "my-projects", component: MyProjectsComponent},
  {path: "contact", component: ContactComponent},
  {path: '**', pathMatch: 'full', redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
