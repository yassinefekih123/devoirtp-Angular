import { Injectable, signal, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);

  // Signal that keeps the connected state
  private isConnectedSignal = signal(this.getConnectedState());

  constructor() {}

  // Check if we are in browser
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // Initial state
  private getConnectedState(): boolean {
    if (this.isBrowser()) {
      return localStorage.getItem('isConnected') === 'true';
    }
    return false;
  }

  // Save value in localStorage
  private setLocalStorage(key: string, value: string): void {
    if (this.isBrowser()) {
      localStorage.setItem(key, value);
    }
  }

  // Read value
  private getLocalStorage(key: string): string {
    if (this.isBrowser()) {
      return localStorage.getItem(key) || '';
    }
    return '';
  }

  // Remove value
  private removeLocalStorage(key: string): void {
    if (this.isBrowser()) {
      localStorage.removeItem(key);
    }
  }

  // Readonly signal
  get isConnected() {
    return this.isConnectedSignal.asReadonly();
  }

  // LOGIN
  login(email: string, password: string): boolean {
    if (email && password) {
      this.setLocalStorage('isConnected', 'true');
      this.setLocalStorage('userEmail', email);
      this.isConnectedSignal.set(true);
      return true;
    }
    return false;
  }

  // REGISTER
  register(nom: string, prenom: string, email: string, password: string): boolean {
    if (nom && prenom && email && password) {
      this.setLocalStorage('isConnected', 'true');
      this.setLocalStorage('userEmail', email);
      this.setLocalStorage('userName', `${prenom} ${nom}`);  // Fixed template literal
      this.isConnectedSignal.set(true);
      return true;
    }
    return false;
  }

  // LOGOUT
  logout(): void {
    this.removeLocalStorage('isConnected');
    this.removeLocalStorage('userEmail');
    this.removeLocalStorage('userName');
    this.isConnectedSignal.set(false);
  }

  // Getters
  getUserEmail(): string {
    return this.getLocalStorage('userEmail');
  }

  getUserName(): string {
    return this.getLocalStorage('userName');
  }
}
