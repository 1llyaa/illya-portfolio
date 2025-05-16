import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(true);
  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor() {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark);
    }
  }

  setTheme(isDark: boolean) {
    this.isDarkTheme.next(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.updateThemeVariables(isDark);
  }

  toggleTheme() {
    this.setTheme(!this.isDarkTheme.value);
  }

  isDark(): boolean {
    return this.isDarkTheme.value;
  }

  private updateThemeVariables(isDark: boolean) {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--bg-primary', '#121212');
      root.style.setProperty('--bg-primary-rgb', '18, 18, 18');
      root.style.setProperty('--bg-secondary', '#1e1e1e');
      root.style.setProperty('--bg-secondary-rgb', '30, 30, 30');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#b3b3b3');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-primary-rgb', '255, 255, 255');
      root.style.setProperty('--bg-secondary', '#f5f5f5');
      root.style.setProperty('--bg-secondary-rgb', '245, 245, 245');
      root.style.setProperty('--text-primary', '#121212');
      root.style.setProperty('--text-secondary', '#666666');
    }
    // Keep accent colors consistent in both themes
    root.style.setProperty('--accent-primary', '#9c27b0');
    root.style.setProperty('--accent-secondary', '#7b1fa2');
    root.style.setProperty('--accent-light', '#ce93d8');
  }
} 