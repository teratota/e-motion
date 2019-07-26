import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-admin-utilisateurs',
  templateUrl: './interface-admin-utilisateurs.component.html',
  styleUrls: ['./interface-admin-utilisateurs.component.css']
})
export class InterfaceAdminUtilisateursComponent implements OnInit {

  constructor(private UserService: UserService) { }

  user: any[];

  ngOnInit() {
    this.user = this.UserService.getAll();
  }

  onDelete(id) {
    this.UserService.delete(id);
    this.user = this.UserService.getAll();
  }

}
