import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService, Contact, Notification } from '@app/core';

@Component({
  templateUrl: 'contact-detail.component.html'
})

export class ContactDetailComponent implements OnInit {
  id;
  contact: Contact;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _contactService: ContactService ) {
  }

  ngOnInit() {
    this._route.params.subscribe( (params) => {
      this.id = params['id'];

      if (this.id) {
        this._contactService.find(this.id).subscribe(
          data => {
            if (data.response != null) {
              this.contact = data.response;
            } else {
              this._router.navigate(['contacts']);
              Notification.notify('No se encontró el contacto que se especificó.', 'warning');
            }
          },
          error => Notification.notify('Ha ocurrido un error.', 'error')
        );
      }
    });
  }

}
