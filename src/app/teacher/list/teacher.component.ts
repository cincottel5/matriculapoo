import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService, Notification } from '@app/core';

declare var swal:any;

@Component({
    templateUrl: './teacher.component.html'
})

export class TeacherComponent implements OnInit {
    
    data: any;
    count: number;
    loaded: boolean = false;
    search: string = "";
    page: number = 1;

    constructor( private _router: Router, private _teacherService: TeacherService){}

    ngOnInit() {
        this.updateData();    
    }

    updateData() {
        this.loaded = false;

        this._teacherService.list(this.page, "", this.search).subscribe( res => {
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
        this._router.navigate(['teachers/add']);
    }

    delete(id: number) {
        this._teacherService.remove(id).subscribe(
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