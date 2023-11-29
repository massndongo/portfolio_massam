import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: 'accueil', component: AboutComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  { path: 'projets', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },

];
