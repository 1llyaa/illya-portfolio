import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTechStackComponent } from '../../components/my-tech-stack/my-tech-stack.component';

export interface Skill {
  description: string;
}

export interface CvTimelineItem {
  header: string;
  company: string;
  years: string;
  skills: Array<string>;
}

export interface SkillCategory {
  title: string;
  skills: Array<string>;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor() {}

  timeline_items: Array<CvTimelineItem> = [
    {
      header: "test",
      company: "test",
      years: "test",
      skills: ["test", "test"]
    },
    {
      header: "test2",
      company: "test2",
      years: "test2",
      skills: ["test", "test"]
    },
  ];

  skillCategories: SkillCategory[] = [
    {
      title: 'Programovací jazyky',
      skills: ['Python (3+ roků)', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'SQL']
    },
    {
      title: 'Frameworky & Knihovny',
      skills: ['Angular', 'RxJS', 'NgRx / Akita', 'Bootstrap', 'Angular Material', 'Django', 'Flask']
    },
    {
      title: 'Databáze',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Nástroje & DevOps',
      skills: ['Git', 'Docker', 'CI/CD', 'Linux', 'NGINX']
    },
    {
      title: 'Testování',
      skills: ['pytest', 'Jasmine', 'Karma', 'ESLint', 'Prettier']
    },
    {
      title: 'Cloud & Služby',
      skills: ['AWS', 'Heroku', 'Firebase', 'Azure']
    }
  ];


}
