import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTechStackComponent } from '../../components/my-tech-stack/my-tech-stack.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, MyTechStackComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  // No need for Figma embed anymore
} 