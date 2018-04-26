import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService, PersonService, CareerService, Student, Person, Notification, Career } from '@app/core';

@Component({
    templateUrl: './student-form.component.html'
})

export class StudentFormComponent implements OnInit{

    id;
    form: FormGroup;
    title: string;
    student = new Student();
    person = new Person();
    career = new Career();
    careers;
    careersArray;
    item;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _studentService: StudentService,
        private _personService: PersonService,
        private _careerService: CareerService,
        private _route: ActivatedRoute) {

        this.form = fb.group({
            beca: ['', Validators.required],
            cedula: ['', Validators.required],
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            edad: ['', Validators.required],
            sexo: ['', Validators.required],
            carrera: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];
            
            this.careers = this._careerService.list(1, '', '');
            this.careers.subscribe( (data) => {
                this.careersArray = data.response;
            });
            
            if (this.id){
                this.title = 'Editar estudiante';
                
                this.item = this._studentService.find(this.id);
                this.item.subscribe( (data) => {
                    this.student = data.response;
                    this.person  = this.student.alumnoKey.persona;
                    this.career = this.student.carrera;
                });

            } else {
                this.title = 'Crear estudiante';
            }
        });
    }

    submit() {
        if (null == this.form.errors) {
            if (this.id) { //Edit
                this._personService.edit(this.person).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            
                            if (typeof this.form.controls.carrera.value == 'string'){
                                this.student.carrera = this.careersArray
                                .find(x => x.idCarrera == this.form.controls.carrera.value);
                            } else {
                                this.student.carrera == this.career;
                            }
                            
                            this._studentService.edit(this.student).subscribe(
                                data => {
                                    if (data.httpStatus == 200) {
                                        this._router.navigate(['students']);
                                        Notification.notify('El estudiante se actualizó exitosamente.', 'success');       
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
                            this.student.alumnoKey.persona = data.response;
                            this.student.alumnoKey.idAlumno = data.response.idPersona;
                            this.student.carrera = this.careersArray
                                .find(x => x.idCarrera == this.form.controls.carrera.value);

                            this._studentService.create(this.student).subscribe(
                                data => {
                                    if (data.httpStatus == 200) {
                                        this._router.navigate(['students']);
                                        Notification.notify('El estudiante se creó exitosamente.', 'success');       
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