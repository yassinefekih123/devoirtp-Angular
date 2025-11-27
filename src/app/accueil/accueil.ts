import { Component, signal, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface DataSource {
  name: string;
  value: string;
}

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.scss'],
})
export class Accueil {
  private authService = inject(AuthService);
  private router = inject(Router);

  isConnected = this.authService.isConnected;
  userName = signal(this.authService.getUserName());
  
  dataSource = signal<DataSource[]>([
    { name: 'Utilisateurs', value: '150' },
    { name: 'Sessions', value: '1200' },
    { name: 'Transactions', value: '3400' }
  ]);

  onLogout() {
    console.log('Déconnexion');
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }
}