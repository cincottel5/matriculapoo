import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, User, Notification } from '@app/core';

@Component({
  templateUrl: './user-form.component.html'
})

export class UserFormComponent implements OnInit {

  id;
  form: FormGroup;
  title: string;
  user = new User();

  constructor(
    fb: FormBuilder,
    private _router: Router,
    private _userService: UserService,
    private _route: ActivatedRoute) {

    this.form = fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this._route.params.subscribe( (params) => {
      this.id = params['id'];

      if (this.id) {
        this.title = 'Editar usuario';

        this._userService.find(this.id).subscribe( (c) => {
          this.user = c.response;
        });
      } else {
        this.title = 'Crear usuario';
      }
    });
  }

  submit() {
    if (null == this.form.errors) {
      if (this.id) { // Edit
        this.user.idUsuario = this.id;

        this._userService.edit(this.user).subscribe(
          data => {
            if (data.httpStatus === 200) {
              this._router.navigate(['users']);
              Notification.notify('El usuario se actualizó exitosamente.', 'success');
            } else {
              Notification.notify('Ha ocurrido un error.', 'error');
            }
          },
          error => Notification.notify('Ha ocurrido un eror.', 'error')
        );
      } else { // Create
        this._userService.create(this.user).subscribe(
          data => {
            if (data.httpStatus === 200) {
              this._router.navigate(['users']);
              Notification.notify('El usuario se creó exitosamente.', 'success');
            } else {
              Notification.notify('Ha ocurrido un error.', 'error');
            }
          },
          error => Notification.notify('Ha ocurrido un error.', 'error')
        );
      }
    } else {
      Notification.notify('El formulario contiene errores: ', 'error');
    }
  }
}
