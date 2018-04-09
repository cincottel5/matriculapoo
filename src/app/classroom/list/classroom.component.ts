import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassroomService, Notification } from '@app/core';

declare var swal:any;

@Component({
    templateUrl: './classroom.component.html'
})

export class ClassroomComponent implements OnInit {
    
    data: any;
    count: number;
    loaded: boolean = false;
    search: string = "";
    page: number = 1;

    constructor( private _router: Router, private _classroomService: ClassroomService){}

    ngOnInit() {
        this.updateData();    
    }

    updateData() {
        this.loaded = false;

        this._classroomService.list(this.page, "", this.search).subscribe( res => {
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
        this._router.navigate(['classrooms/add']);
    }

    delete(id: number) {
        this._classroomService.remove(id).subscribe(
            data => {
                if (data.httpStatus == 200) {
                    this.updateData();    
                    Notification.notify('El registro se eliminó exitosamente.', 'success');
                    
                } else {
                    Notification.notify('Ha ocurrido un eror.', 'error');       
                }
            },
            error => Notification.notify('Ha ocurrido un eror.', 'error')
        );
    }
}