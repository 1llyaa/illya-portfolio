import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { MyTechStackComponent } from '../../components/my-tech-stack/my-tech-stack.component';
import {AboutMeComponent} from '../../components/about-me/about-me.component';
import {ProjectsComponent} from '../../components/projects/projects.component';
import {ContactComponent} from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
