import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    projects = [
        {
            title: 'Portfolio Website',
            description: 'Personal site to showcase my work and skills using Angular.',
            image: '../../../assets/images/portfolio-website.png',
            link: 'https://github.com/1llyaa/illya-portfolio',
        },
        {
            title: 'E-commerce website',
            description: 'Shopify based eshop with high conversion rates',
            image: '../../../assets/images/ident-kosmetika.png',
            link: 'https://identkosmetika.cz/',
        },
        {
            title: 'Wordpress website',
            description: 'Website for local project',
            image: '../../../assets/images/domko-domy.png',
            link: 'https://domkodomy.cz/',
        },
    ];
}
