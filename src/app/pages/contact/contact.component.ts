import { Component } from '@angular/core';
import { ContactComponent as ContactFormComponent } from '../../components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactPageComponent {

} 