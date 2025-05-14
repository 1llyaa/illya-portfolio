import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal site to showcase my work and skills using Angular.',
      image: 'https://placehold.co/800x400/9c27b0/ffffff?text=Portfolio+Website&font=montserrat',
      link: 'https://github.com/1llyaa',
    },
    {
      title: 'Task Manager',
      description: 'Angular-based todo app with Firebase backend and authentication.',
      image: 'https://placehold.co/800x400/7b1fa2/ffffff?text=Task+Manager&font=montserrat',
      link: 'https://github.com/1llyaa/task-manager',
    },
    {
      title: 'Weather App',
      description: 'Weather forecast app using OpenWeatherMap API and Angular animations.',
      image: 'https://placehold.co/800x400/ce93d8/121212?text=Weather+App&font=montserrat',
      link: 'https://github.com/1llyaa/weather-app',
    },
  ];
}
