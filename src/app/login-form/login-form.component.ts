import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersDataService } from '../users-data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {
  loginForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  signUpForm = this.fb.group({
    nameSignUp: ['', [Validators.required]],
    passwordSignUp: ['', [Validators.required]],
    roleSignUp: ['', [Validators.required, Validators.pattern(/^(Registration Secretary|Gym Teacher)$/)]]
  });

  constructor(private fb: FormBuilder, private userDataService: UsersDataService, private router: Router) { }
  showForm = false;

  submitForm() {
    this.userDataService.AddUser(this.signUpForm.value.nameSignUp!, this.signUpForm.value.passwordSignUp!, this.signUpForm.value.roleSignUp!);
    console.log('User submitted:', this.signUpForm.value.nameSignUp);

    this.showForm = false;
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit() {
    if (this.loginForm.valid) {

      const user = this.userDataService.login(this.loginForm.value.name ? this.loginForm.value.name : "", this.loginForm.value.password ? this.loginForm.value.password : "");
      if (user) {
        if (user.role === 'Registration Secretary') {
          localStorage.setItem('userRole', 'Registration Secretary')
          this.router.navigate(['RegistrationForm']);
        }
        else {
          localStorage.setItem('userRole', 'Gym Teacher')
          this.router.navigate(['LessonList']);
        }
      }
      else {
        alert('Invalid username or password');
        this.loginForm.reset();
      }
    }

    else {
      console.log('Form is invalid');
    }
  }
}
