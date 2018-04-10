import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService, Teacher, Notification } from '@app/core';

@Component({
    templateUrl: 'teacher-detail.component.html'
})

export class TeacherDetailComponent implements OnInit {
    id;
    teacher: Teacher;

    constructor( 
        private _router: Router, 
        private _route: ActivatedRoute, 
        private _teacherService: TeacherService ) {
    }
    
    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];

            if (this.id) {
                this._teacherService.find(this.id).subscribe(
                    data => {
                        if (data.response != null) {
                            this.teacher = data.response;
                        } else {
                            this._router.navigate(['teachers']);    
                            Notification.notify('No se encontró el profesor especificado.', 'warning');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un error.', 'error')
                );
            } 
        });
    }

}