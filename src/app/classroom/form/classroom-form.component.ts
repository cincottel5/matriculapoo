import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassroomService, Classroom, Notification } from '@app/core';

@Component({
    templateUrl: './classroom-form.component.html'
})

export class ClassroomFormComponent implements OnInit{

    id;
    form: FormGroup;
    title: string;
    classroom = new Classroom();

    classroomTypes = ["Aula", "Laboratorio", "Anfiteatro", "Salón de estudio"]

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _classroomService: ClassroomService,
        private _route: ActivatedRoute) {

        this.form = fb.group({
            tipo: ['', Validators.required],
            numeroAula: ['', Validators.required],
            area: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];
            
            if (this.id){
                this.title = 'Editar aula';
                
                this._classroomService.find(this.id).subscribe( (c) => {
                    this.classroom = c.response;
                });
            } else {
                this.title = 'Crear aula';
            }
        });
    }

    submit() {
        if (null == this.form.errors) {
            if (this.id) { //Edit
                this.classroom.idAula = this.id;

                this._classroomService.edit(this.classroom).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this._router.navigate(['classrooms']);
                            Notification.notify('El aula se actualizó exitosamente.', 'success');       
                        } else {
                            Notification.notify('Ha ocurrido un eror.', 'error');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un eror.', 'error')
                );
            } else { // Create
                this._classroomService.create(this.classroom).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this._router.navigate(['classrooms']);
                            Notification.notify('El aula se creó exitosamente.', 'success');       
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