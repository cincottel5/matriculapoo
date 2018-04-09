import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassroomService, Classroom, Notification } from '@app/core';

@Component({
    templateUrl: 'classroom-detail.component.html'
})

export class ClassroomDetailComponent implements OnInit {
    id;
    classroom: Classroom;

    constructor( 
        private _router: Router, 
        private _route: ActivatedRoute, 
        private _classroomService: ClassroomService ) {
    }
    
    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];

            if (this.id) {
                this._classroomService.find(this.id).subscribe(
                    data => {
                        if (data.response != null) {
                            this.classroom = data.response;
                        } else {
                            this._router.navigate(['classrooms']);    
                            Notification.notify('No se encontró el aula que se especificó.', 'warning');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un error.', 'error')
                );
            } 
        });
    }

}