import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CareerService, Career, Notification } from '@app/core';

@Component({
    templateUrl: 'career-detail.component.html'
})

export class CareerDetailComponent implements OnInit {
    id;
    career: Career;


    /**
     * Patron dependency Injection
     * @param _router 
     * @param _route 
     * @param _careerService 
     */
    constructor( 
        private _router: Router, 
        private _route: ActivatedRoute, 
        private _careerService: CareerService ) {
    }
    
    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];

            if (this.id) {
                this._careerService.find(this.id).subscribe(
                    data => {
                        if (data.response != null) {
                            this.career = data.response;
                        } else {
                            this._router.navigate(['careers']);    
                            Notification.notify('No se encontró el aula que se especificó.', 'warning');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un error.', 'error')
                );
            } 
        });
    }

}