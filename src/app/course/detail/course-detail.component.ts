import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassroomService, Notification } from '@app/core';
import {CourseService} from '@app/core/_services/course.service';
import {Course} from '@app/core/_models/course';

@Component({
    templateUrl: 'course-detail.component.html'
})

export class CourseDetailComponent implements OnInit {
    id;
    classroom: Course;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _classroomService: CourseService ) {
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
                            Notification.notify('No se encontró la materia que se especificó.', 'warning');
                        }
                    },
                    error => Notification.notify('Ha ocurrido un error.', 'error')
                );
            }
        });
    }

}
