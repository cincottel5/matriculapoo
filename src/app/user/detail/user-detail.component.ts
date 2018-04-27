import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, User, Notification } from '@app/core';

@Component({
  templateUrl: 'user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
  id;
  user: User;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService ) {
  }

  ngOnInit() {
    this._route.params.subscribe( (params) => {
      this.id = params['id'];

      if (this.id) {
        this._userService.find(this.id).subscribe(
          data => {
            if (data.response != null) {
              this.user = data.response;
            } else {
              this._router.navigate(['users']);
              Notification.notify('No se encontró el usuario que se especificó.', 'warning');
            }
          },
          error => Notification.notify('Ha ocurrido un error.', 'error')
        );
      }
    });
  }

}
