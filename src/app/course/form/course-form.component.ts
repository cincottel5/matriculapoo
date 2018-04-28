import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService, ClassroomService, CareerService, Course, Notification, Career, Classroom } from '@app/core';

declare var $:any;

@Component({
    templateUrl: './course-form.component.html'
})

export class CourseFormComponent implements OnInit{

    id;
    form: FormGroup;
    title: string;
    course = new Course();
    career = new Career();
    classroom = new Classroom();
    
    careers;
    classrooms;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _courseService: CourseService,
        private _careerService: CareerService,
        private _classroomService: ClassroomService,
        private _route: ActivatedRoute) {

        this.form = fb.group({
            codigo: ['', Validators.required],
            nombre: ['', Validators.required],
            creditos: ['', Validators.required],
            costo: ['', Validators.required],
            carrera: ['', Validators.required],
            aula: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];
            
            if (this.id){
                this.title = 'Editar materia';
                
                this._courseService.find(this.id).subscribe( (data) =>{
                    this.course = data.response;
                    this.classroom = data.response.aula;
                    this.career = data.response.carrera;
                });
            } else {
                this.title = 'Crear materia';
            }
        });

        this._classroomService.list(1, '', '').subscribe( (res) => {
            this.classrooms = res.response;
        });

        this._careerService.list(1, '', '').subscribe( (res) => {
            this.careers = res.response;
        });
    }

    submit() {
        if (null == this.form.errors) {
            if (this.id) { //Edit
                this.course.idMateria = this.id;
                
                if (typeof this.form.controls.carrera.value == 'string'){
                    this.course.carrera = this.careers
                    .find(x => x.idCarrera == this.form.controls.carrera.value);
                } else {
                    this.course.carrera = this.career;
                }

                if (typeof this.form.controls.aula.value == 'string'){
                    this.course.aula = this.classrooms
                    .find(x => x.idAula == this.form.controls.aula.value);
                } else {
                    this.course.aula = this.classroom;
                }

                this._courseService.edit(this.course).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this._router.navigate(['courses']);
                            Notification.notify('La materia se actualizó exitosamente.', 'success');       
                        } else {
                            Notification.notify('Ha ocurrido un eror.', 'error');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un eror.', 'error')
                );
            } else { // Create
                this.course.carrera = this.careers
                    .find(x => x.idCarrera == this.form.controls.carrera.value);

                this.course.aula = this.classrooms
                    .find(x => x.idAula == this.form.controls.aula.value);

                this._courseService.create(this.course).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this._router.navigate(['courses']);
                            Notification.notify('La materia se creó exitosamente.', 'success');       
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