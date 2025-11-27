import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface NavLink {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Mon Application');
  protected readonly navLinks: NavLink[] = [
    { label: 'Accueil', route: '/accueil', icon: 'home' },
    { label: 'Connexion', route: '/connexion', icon: 'login' },
    { label: 'Inscription', route: '/inscription', icon: 'person_add' }
  ];
  
  protected mobileMenuOpen = signal(false);
  
  toggleMobileMenu() {
    this.mobileMenuOpen.update(val => !val);
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}