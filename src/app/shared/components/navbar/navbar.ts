import { Component, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  isDarkMode = signal(false);

  toggleTheme() {
    if (!this.isBrowser) return;

    this.isDarkMode.update(value => !value);
    const theme = this.isDarkMode() ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    this.isDarkMode.set(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}
