import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitStatus: { success: boolean; message: string } | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$')]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    emailjs.init(environment.emailjs.publicKey);
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitStatus = null;

      try {
        const response = await emailjs.send(
          environment.emailjs.serviceId,
          environment.emailjs.templateId,
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            from_phone: this.contactForm.value.phone,
            subject: this.contactForm.value.subject,
            message: this.contactForm.value.message,
            sent_at: new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })
          }
        );

        this.submitStatus = {
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        };
        this.contactForm.reset();
      } catch (error) {
        this.submitStatus = {
          success: false,
          message: 'Sorry, there was an error sending your message. Please try again.'
        };
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Helper methods for template
  hasError(controlName: string, errorName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control?.touched && control?.hasError(errorName) || false;
  }
}
