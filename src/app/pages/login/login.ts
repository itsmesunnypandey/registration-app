import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;
  submitted = false;
  wrongPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.loginForm.get('password')?.valueChanges.subscribe(() => {
      if (this.wrongPassword) {
        this.wrongPassword = false;
      }
    });
  }

  onSubmit() {
    debugger
    this.submitted = true;
    this.wrongPassword = false;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const correctPassword = 'sunnypandey2017@gmail.com';
    if (this.loginForm.valid && this.loginForm.value.password === correctPassword) {
      localStorage.setItem("key", correctPassword);
      this.router.navigate(['/contact-info']);
    }
    else {
      this.wrongPassword = true;
      return;
    }
  }
}
