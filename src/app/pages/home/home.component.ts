import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { MyTechStackComponent } from '../../components/my-tech-stack/my-tech-stack.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, MyTechStackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
