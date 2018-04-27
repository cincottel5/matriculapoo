import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnrollmentService, Enrollment, EnrollmentDetailService, Notification } from '@app/core';

@Component({
    templateUrl: 'enrollment-detail.component.html'
})

export class EnrollmentDetailComponent implements OnInit {
    id;
    enrollment;
    enrollmentDetails;

    constructor( 
        private _router: Router, 
        private _route: ActivatedRoute, 
        private _enrollmentService: EnrollmentService,
        private _enrollmentDetailService: EnrollmentDetailService ) {
    }
    
    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];

            if (this.id) {
                this.enrollment =  this._enrollmentService.find(this.id);
                this.enrollmentDetails = this._enrollmentDetailService.find(this.id);
            } 
        });
    }

    redirectEdit() {
        this._router.navigate(['enrollments/edit', this.id]);
    }

}