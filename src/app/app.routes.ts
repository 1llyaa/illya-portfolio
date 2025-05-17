import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMePageComponent } from './pages/about-me/about-me.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', component: NotFoundComponent },
];
