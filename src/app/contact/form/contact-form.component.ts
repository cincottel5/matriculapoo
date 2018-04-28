import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService, Contact, Notification } from '@app/core';

@Component({
  templateUrl: './contact-form.component.html'
})

export class ContactFormComponent implements OnInit{

  id;
  form: FormGroup;
  title: string;
  contact = new Contact();

  constructor(
    fb: FormBuilder,
    private _router: Router,
    private _contactService: ContactService,
    private _route: ActivatedRoute) {

    this.form = fb.group({
      descripcion: ['', Validators.required],
      nombre: ['', Validators.required],
      persona: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this._route.params.subscribe( (params) => {
      this.id = params['id'];

      if (this.id) {
        this.title = 'Editar contacto';

        this._contactService.find(this.id).subscribe( (c) => {
          this.contact = c.response;
        });
      } else {
        this.title = 'Crear contacto';
      }
    });
  }

  submit() {
    if (null == this.form.errors) {
      if (this.id) { // Edit
        this.contact.idContacto = this.id;

        this._contactService.edit(this.contact).subscribe(
          data => {
            if (data.httpStatus == 200) {
              this._router.navigate(['contacts']);
              Notification.notify('El contacto se actualizó exitosamente.', 'success');
            } else {
              Notification.notify('Ha ocurrido un eror.', 'error');
            }
          },
          error => Notification.notify('Ha ocurrido un eror.', 'error')
        );
      } else { // Create
        this._contactService.create(this.contact).subscribe(
          data => {
            if (data.httpStatus == 200) {
              this._router.navigate(['contacts']);
              Notification.notify('El contacto se creó exitosamente.', 'success');
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
