import { Injectable } from '@angular/core';

export interface User {
  username: string;
  password: string;
  role: 'Registration Secretary' | 'Gym Teacher';
}

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }

  private users: User[] = [
    {
      username: 'rachel123',
      password: 'pass1234',
      role: 'Registration Secretary'
    },
    {
      username: 'noaGym',
      password: 'gympass1',
      role: 'Gym Teacher'
    },
    {
      username: 'admin1',
      password: 'adminpass',
      role: 'Registration Secretary'
    }];

  getAllUsers(): User[] {
    return this.users;
  }

  login(username: string, password: string): User | null {
    const user = this.users.find(user => user.username === username && user.password === password);
    return user ? { ...user } : null;
  }
  AddUser(userName: string, password: string, role: string): void {
    const newUser: User = {
      username: userName,
      password: password,
      role: role as 'Registration Secretary' | 'Gym Teacher'
    }
    this.users.push(newUser);
  }
}
