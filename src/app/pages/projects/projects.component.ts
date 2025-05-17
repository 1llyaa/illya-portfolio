import { Component } from '@angular/core';
import { ProjectsComponent as ProjectsListComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsPageComponent {

} 