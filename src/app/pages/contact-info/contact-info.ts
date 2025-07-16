import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/UserService';
import { ContactInfo as ContactInfoModel } from '../../models/contact-info.model';
import { Router } from '@angular/router';

import { emailMatchValidator } from '../../validators/validators';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-info.html',
  styleUrls: ['./contact-info.scss']
})
export class ContactInfo implements OnInit {
  contactForm!: FormGroup;
  states = ['Alabama', 'California', 'Texas', 'New York', 'Florida'];

  constructor(private fb: FormBuilder, private userService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        state: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
        confirmEmail: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
        subscribe: [false]
      },
      {
        validators: emailMatchValidator()
      }
    );
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const contactInfo: ContactInfoModel = this.contactForm.value;
    const key = 'sunnypandey2017@gmail.com';

    this.userService.createRegistration(contactInfo, key).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.router.navigate(['/success-page']);
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
