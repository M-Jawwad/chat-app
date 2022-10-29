import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('tableExpand', [
      state('collapsed', style({ width: '0' })),
      state('expanded', style({ display: 'flex', width: '100%' })),
      transition('expanded <=> collapsed', animate('250ms ease-in-out'))
    ]),
    trigger('formExpand', [
      state('collapsed', style({ display: 'none', width: '0' })),
      state('expanded', style({ display: 'flex', width: '25%' })),
      transition('expanded <=> collapsed', animate('250ms ease-in-out'))
    ]),
  ]
})
export class UsersComponent implements OnInit {

  users: any[];
  showUserForm: boolean;

  constructor(
    private apiService: ApiService
  ) {
    this.users = [];
    this.showUserForm = false;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    const url = `${environment.baseUrl}/user/users`;
    this.apiService.get(url).subscribe((resp: any) => {
      this.users = resp.data;
    }, (err: any) => {
      console.log(err);
    });
  }

  onAddUser() {
    this.showUserForm = !this.showUserForm;
  }

}
