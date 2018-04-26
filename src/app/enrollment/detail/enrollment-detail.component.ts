import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnrollmentService, Enrollment, Notification } from '@app/core';

@Component({
    templateUrl: 'enrollment-detail.component.html'
})

export class EnrollmentDetailComponent implements OnInit {
    id;
    enrollment: Enrollment;

    constructor( 
        private _router: Router, 
        private _route: ActivatedRoute, 
        private _enrollmentService: EnrollmentService ) {
    }
    
    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];

            if (this.id) {
                this._enrollmentService.find(this.id).subscribe(
                    data => {
                        if (data.response != null) {
                            this.enrollment = data.response;
                        } else {
                            this._router.navigate(['enrollments']);    
                            Notification.notify('No se encontró la matrícula que se especificó.', 'warning');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un error.', 'error')
                );
            } 
        });
    }

}