import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundSceneComponent } from '../background-scene/background-scene.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, BackgroundSceneComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {}
