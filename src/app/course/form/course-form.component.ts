import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Career, CareerService, Classroom, ClassroomService, Notification} from '@app/core';
import {CourseService} from '@app/core/_services/course.service';
import { Course } from '../../core/_models/course';

@Component({
    templateUrl: './course-form.component.html'
})

export class CourseFormComponent implements OnInit {

    id;
    form: FormGroup;
    title: string;
    course = new Course();
    classroom = new Classroom();
    career = new Career();

    careers;
    careerArray;
    selectedCareer;
    classrooms;
    classroomArray;
    selectedClassroom;



    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _courseService: CourseService,
        private _careerService: CareerService,
        private _classroomService: ClassroomService,
        private _route: ActivatedRoute) {

        this.form = fb.group({
            creditos: ['', Validators.required],
            codigo: ['', Validators.required],
            nombre: ['', Validators.required],
            costo: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe( (params) => {
          this.classrooms = this._classroomService.list(1,'','')
          this.classrooms.subscribe( (data) => {
            this.classroomArray = data.response;
          });

          this.careers = this._careerService.list(1,'','');
          this.careers.subscribe( data => {
              this.careerArray = data.response;
              console.log(this.careerArray);
          });

            this.id = params['id'];

            if (this.id) {
                this.title = 'Editar materia';

                this._courseService.find(this.id).subscribe( (c) => {
                    this.course = c.response;
                });
            } else {
                this.title = 'Crear materia';
            }
        });
    }

    submit() {
        if (null == this.form.errors) {
            if (this.id) { // Edit
                this.course.idMateria = this.id;

                this._courseService.edit(this.course).subscribe(
                    data => {
                        if (data.httpStatus === 200) {
                            this._router.navigate(['courses']);
                            Notification.notify('El aula se actualizó exitosamente.', 'success');
                        } else {
                            Notification.notify('Ha ocurrido un eror.', 'error');
                        }
                    },
                    error => Notification.notify('Ha ocurrido un eror.', 'error')
                );
            } else { // Create
              console.log(this.course)
                this._courseService.create(this.course).subscribe(
                    data => {
                        if (data.httpStatus === 200) {
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
