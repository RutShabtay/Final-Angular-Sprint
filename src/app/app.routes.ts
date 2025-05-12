import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component: LoginFormComponent },
    {
        path: 'RegistrationForm', component: RegistrationFormComponent, canActivate: [authGuard]
    },
    {
        path: 'LessonList', component: LessonsListComponent, canActivate: [authGuard]
    }
];
