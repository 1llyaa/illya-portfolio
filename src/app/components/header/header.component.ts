import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    isMenuOpen = false;
    lastScrollTop = 0;
    isHeaderVisible = true;
    isDarkTheme = true;

    constructor(private themeService: ThemeService) {
        this.themeService.isDarkTheme$.subscribe((isDark) => (this.isDarkTheme = isDark));
    }

    ngOnInit() {
        // Initial theme check
        this.themeService.isDarkTheme$.subscribe((isDark) => (this.isDarkTheme = isDark));
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    @HostListener('window:scroll')
    onWindowScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        this.isHeaderVisible = currentScroll < this.lastScrollTop || currentScroll < 50;
        this.lastScrollTop = currentScroll;
    }
}
