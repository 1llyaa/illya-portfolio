import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTechStackComponent } from '../../components/my-tech-stack/my-tech-stack.component';

interface CvEducationItem {
  title: string;
  institution: string;
  date: string;
  description: string;
}

export interface Language {
  language: string
  skill_level: string
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

  cvTimelineItems: Array<CvTimelineItem> = [
    {
      header: "Mobile Operator",
      company: "Starnet s.r.o.",
      years: "2022–2023",
      skills: ["Communication", "Working with internal systems and CRM tools", "Soft Skills"]
    },
    {
      header: "Software Tester",
      company: "ENGEL strojírenská spol. s r.o.",
      years: "2023",
      skills: ["Software Testing", "Team Collaboration"]
    },
    {
      header: "Intern",
      company: "ICZ a.s.",
      years: "2024",
      skills: ["Active Directory", "Azure"]
    },
    {
      header: "Full-Stack Developer",
      company: "Robert Bosch, spol. s r.o.",
      years: "2024–Present",
      skills: ["Clean Code", "Agile Development", "CI/CD", "Code Reviews", "Internal Product Development"]
    },
    {
      header: "E-Shop Developer",
      company: "Freelance",
      years: "2024–Present",
      skills: ["GraphQL", "Client Communication"]
    }
  ];

  skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['Python (3+ years)', 'TypeScript', 'JavaScript (ES6+)', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Angular', 'RxJS', 'Tailwind', 'Angular Material', 'Django', 'FastAPI']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'SQLite', 'MongoDB']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'CI/CD', 'Linux', 'NGINX']
    },
    {
      title: 'Services',
      skills: ['WordPress', 'Shopify']
    }
  ];

  languages: Language[] = [
    {
      language: "English",
      skill_level: "C1"
    },
    {
      language: "Czech",
      skill_level: "Native"
    },
    {
      language: "Russian",
      skill_level: "Native"
    },
  ]

  cvEducationItems: CvEducationItem[] = [
    {
      title: "Secondary School Diploma in Information Technology",
      institution: "COP Hluboká nad Vltavou",
      date: "2020–2024",
      description:
        "Focused on computer systems, programming, and networks. Graduated with a specialization in IT."
    },
    {
      title: "Bachelor’s Degree in Business Informatics (ongoing)",
      institution: "University of South Bohemia (JČU)",
      date: "2024–Present",
      description:
        "Currently studying business information systems, combining IT and management skills."
    }
  ];


}
