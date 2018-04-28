import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService, Notification } from '@app/core';

declare var swal:any;

@Component({
  templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {

  data: any;
  count: number;
  loaded: boolean = false;
  search: string = "";
  page: number = 1;

  constructor( private _router: Router, private _contactService: ContactService){}

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.loaded = false;

    this._contactService.list(this.page, "", this.search).subscribe( res => {
      this.data = res.response;
      this.count = res.response.length;
      this.loaded = true;
    });
  }

  changePage(event){
    this.page = event;
    //this.updateData();
  }

  add() {
    this._router.navigate(['contacts/add']);
  }

  delete(id: number) {
    this._contactService.remove(id).subscribe(
      data => {
        if (data.httpStatus === 200) {
          this.updateData();
          Notification.notify('El registro se eliminó exitosamente.', 'success');

        } else {
          Notification.notify('Ha ocurrido un eror.', 'error');
        }
      },
      error => Notification.notify('Ha ocurrido un error.', 'error')
    );
  }
}
