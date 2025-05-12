import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('userRole');
  const url = state.url;
  if (role === 'Registration Secretary' && url === '/RegistrationForm' || role === 'Gym Teacher' && url === '/LessonList') {
    return true;
  }
  return false;
};
