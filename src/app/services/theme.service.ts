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
      root.style.setProperty('--bg-primary', '#2f3d53');
      root.style.setProperty('--bg-primary-rgb', '47, 61, 83');
      root.style.setProperty('--bg-secondary', '#1f2937');
      root.style.setProperty('--bg-secondary-rgb', '31, 41, 55');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#ffedcb');
    } else {
      root.style.setProperty('--bg-primary', '#ffedcb');
      root.style.setProperty('--bg-primary-rgb', '255, 237, 203');
      root.style.setProperty('--bg-secondary', '#fff5e6');
      root.style.setProperty('--bg-secondary-rgb', '255, 245, 230');
      root.style.setProperty('--text-primary', '#2f3d53');
      root.style.setProperty('--text-secondary', '#887456');
    }
    // Keep accent colors consistent in both themes
    root.style.setProperty('--accent-primary', '#dba11c');
    root.style.setProperty('--accent-secondary', '#887456');
    root.style.setProperty('--accent-light', '#ffedcb');
  }
} 