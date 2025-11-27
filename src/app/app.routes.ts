import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Connexion } from './connexion/connexion';
import { Inscription } from './inscription/inscription';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: Accueil },
  { path: 'connexion', component: Connexion },
  { path: 'inscription', component: Inscription }
];