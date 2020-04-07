import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

}
