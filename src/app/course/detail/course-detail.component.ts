import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService, Course, Notification } from '@app/core';

@Component({
    templateUrl: 'course-detail.component.html'
})

export class CourseDetailComponent implements OnInit {
    id;
    course: Course;

    constructor( 
        private _router: Router, 
        private _route: ActivatedRoute, 
        private _courseService: CourseService ) {
    }
    
    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];

            if (this.id) {
                this._courseService.find(this.id).subscribe(
                    data => {
                        if (data.response != null) {
                            this.course = data.response;
                        } else {
                            this._router.navigate(['courses']);    
                            Notification.notify('No se encontró el aula que se especificó.', 'warning');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un error.', 'error')
                );
            } 
        });
    }

}