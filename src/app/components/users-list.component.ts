import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  searchTerm = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  get filteredUsers() {
    return this.users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}