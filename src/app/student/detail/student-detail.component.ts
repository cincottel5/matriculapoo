import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService, Student, Notification } from '@app/core';

@Component({
    templateUrl: 'student-detail.component.html'
})

export class StudentDetailComponent implements OnInit {
    id;
    student: Student;
    item

    constructor( 
        private _router: Router, 
        private _route: ActivatedRoute, 
        private _studentService: StudentService ) {
    }
    
    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];

            if (this.id) {
                this.item = this._studentService.find(this.id);
            } 
        });
    }

}