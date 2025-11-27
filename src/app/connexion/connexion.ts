import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.scss'],
})
export class Connexion {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  email: string = '';
  password: string = '';
  hidePassword: boolean = true;

  onSubmit() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/accueil']);
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}