import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService, PersonService, Teacher, Person, Notification } from '@app/core';

@Component({
    templateUrl: './teacher-form.component.html'
})

export class TeacherFormComponent implements OnInit{

    id;
    form: FormGroup;
    title: string;
    teacher = new Teacher();
    person = new Person();
    item;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _teacherService: TeacherService,
        private _personService: PersonService,
        private _route: ActivatedRoute) {

        this.form = fb.group({
            especialidad: ['', Validators.required],
            cedula: ['', Validators.required],
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            edad: ['', Validators.required],
            sexo: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];
            
            if (this.id){
                this.title = 'Editar profesor';
                
                this.item = this._teacherService.find(this.id);

                this.item.subscribe( (data) => {
                    this.teacher = data.response;
                    this.person  = this.teacher.profesorKey.persona;
                });

            } else {
                this.title = 'Crear profesor';
            }
        });
    }

    submit() {
        if (null == this.form.errors) {
            if (this.id) { //Edit
                this._personService.edit(this.person).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this._teacherService.edit(this.teacher).subscribe(
                                data => {
                                    if (data.httpStatus == 200) {
                                        this._router.navigate(['teachers']);
                                        Notification.notify('El profesor se actualizó exitosamente.', 'success');       
                                    } else {
                                        Notification.notify('Ha ocurrido un eror.', 'error');       
                                    }
                                },
                                error => Notification.notify('Ha ocurrido un eror.', 'error')
                            );
                        } else {
                            Notification.notify('Ha ocurrido un eror.', 'error');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un eror.', 'error')
                );
            } else { // Create
                this._personService.create(this.person).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this.teacher.profesorKey.persona = data.response;
                            this.teacher.profesorKey.idProfesor = data.response.idPersona;
                            this._teacherService.create(this.teacher).subscribe(
                                data => {
                                    if (data.httpStatus == 200) {
                                        this._router.navigate(['teachers']);
                                        Notification.notify('El profesor se creó exitosamente.', 'success');       
                                    } else {
                                        Notification.notify(`Ha ocurrido un error al procesar la solicitud: ${data.httpStatus}.`, 'error');       
                                    }
                                },
                                error => Notification.notify('Ha ocurrido un error.', 'error')
                            );

                        } else {
                            Notification.notify(`Ha ocurrido un error al procesar la solicitud: ${data.httpStatus}.`, 'error');
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