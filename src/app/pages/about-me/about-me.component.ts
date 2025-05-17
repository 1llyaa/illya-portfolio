import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTechStackComponent } from '../../components/my-tech-stack/my-tech-stack.component';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [CommonModule, MyTechStackComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMePageComponent {
  // No need for Figma embed anymore
} 