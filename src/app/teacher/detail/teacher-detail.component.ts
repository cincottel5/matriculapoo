import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService, Teacher, Notification, PersonFactory } from '@app/core';

@Component({
    templateUrl: 'teacher-detail.component.html'
})

export class TeacherDetailComponent implements OnInit {
    id;
    item;

    constructor( 
        private _router: Router, 
        private _route: ActivatedRoute, 
        private _teacherService: TeacherService,
        private _personFactory: PersonFactory ) {
            /**
             * Patron factory
             */
            this.item = this._personFactory.getPerson('teacher');
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