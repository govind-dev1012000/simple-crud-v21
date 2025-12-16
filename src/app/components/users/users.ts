import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../service/users';
import { User } from '../../model/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule,CommonModule],
  providers: [UsersService],
  templateUrl: './users.html',
})
export class Users implements OnInit {

  users: User[] = [];
  user: User = { name: '', email: '' };

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  saveUser() {
    if (this.user.id) {
      this.usersService.updateUser(this.user)
        .subscribe(() => this.loadUsers());
    } else {
      this.usersService.addUser(this.user)
        .subscribe(() => this.loadUsers());
    }
    this.user = { name: '', email: '' };
  }

  editUser(user: User) {
    this.user = { ...user };
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id)
      .subscribe(() => this.loadUsers());
  }
}
