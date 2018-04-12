import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CareerService, Career, Notification } from '@app/core';

@Component({
    templateUrl: './career-form.component.html'
})

export class CareerFormComponent implements OnInit{

    id;
    form: FormGroup;
    title: string;
    career = new Career();

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _careerService: CareerService,
        private _route: ActivatedRoute) {

        this.form = fb.group({
            codigo: ['', Validators.required],
            nombre: ['', Validators.required],
            totalCreditos: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];
            
            if (this.id){
                this.title = 'Editar carrera';
                
                this._careerService.find(this.id).subscribe( (c) => {
                    this.career = c.response;
                });
            } else {
                this.title = 'Crear carrera';
            }
        });
    }

    submit() {
        if (null == this.form.errors) {
            if (this.id) { //Edit
                this.career.idCarrera = this.id;

                this._careerService.edit(this.career).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this._router.navigate(['careers']);
                            Notification.notify('La carrera se actualizó exitosamente.', 'success');       
                        } else {
                            Notification.notify('Ha ocurrido un eror.', 'error');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un eror.', 'error')
                );
            } else { // Create
                this._careerService.create(this.career).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this._router.navigate(['careers']);
                            Notification.notify('La carrera se creó exitosamente.', 'success');       
                        } else {
                            Notification.notify('Ha ocurrido un error.', 'error');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un error.', 'error')
                );
            }
        } else {
            Notification.notify('El formulario contiene errores: ', 'error');
        }
    }
}