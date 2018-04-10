import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService, Teacher, Person, Notification } from '@app/core';

@Component({
    templateUrl: './teacher-form.component.html'
})

export class TeacherFormComponent implements OnInit{

    id;
    form: FormGroup;
    title: string;
    teacher = new Teacher();

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _teacherService: TeacherService,
        private _route: ActivatedRoute) {

        this.form = fb.group({
            especialidad: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];
            
            if (this.id){
                this.title = 'Editar profesor';
                
                this._teacherService.find(this.id).subscribe( (c) => {
                    this.teacher = c.response;
                });
            } else {
                this.title = 'Crear profesor';
            }
        });
    }

    submit() {
        if (null == this.form.errors) {
            if (this.id) { //Edit
                this.teacher.profesorKey.idProfesor = this.id;

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
            } else { // Create
                let persona = new Person();
                persona.cedula = 1123123;
                persona.edad = 12;
                persona.apellido = "Carvajal";
                persona.nombre = "Yelko";
                persona.sexo = "male";

                this.teacher.profesorKey.persona = persona;

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
            }
        } else {
            Notification.notify('El formulario contiene errores: ', 'error');
        }
    }
}