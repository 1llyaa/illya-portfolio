import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvPageComponent {
  figmaEmbedUrl: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) {
    // Replace with your actual Figma file URL
    const figmaUrl = 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_FILE_URL';
    this.figmaEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(figmaUrl);
  }
} 