import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  tooltip: string;
  img: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-my-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-tech-stack.component.html',
  styleUrl: './my-tech-stack.component.scss'
})

export class MyTechStackComponent {

  skills: Skill[] = [
    {
      tooltip: "Building modern web applications with Angular. Experience with TypeScript, RxJS, and Angular Material.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
      alt: "Angular",
      label: "Angular"
    },
    {
      tooltip: "Backend development, automation, scraping and APIs using Python. Experience with FastAPI and Django.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
      label: "Python"
    },
    {
      tooltip: "Developing e-shops and websites. Experience with WooCommerce and custom plugins.",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      alt: "WordPress",
      label: "WordPress"
    },
    {
      tooltip: "E-commerce development. Experience with custom apps and integrations.",
      img: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      alt: "Shopify",
      label: "Shopify"
    },
    {
      tooltip: "Working with NoSQL databases. Experience in data modeling and query optimization.",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
      label: "MongoDB"
    }
  ];

}
