import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService, Teacher, Notification } from '@app/core';

@Component({
    templateUrl: 'teacher-detail.component.html'
})

export class TeacherDetailComponent implements OnInit {
    id;
    teacher: Teacher;
    item

    constructor( 
        private _router: Router, 
        private _route: ActivatedRoute, 
        private _teacherService: TeacherService ) {
    }
    
    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];

            if (this.id) {
                this.item = this._teacherService.find(this.id);
            } 
        });
    }

}