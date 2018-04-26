import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { 
    EnrollmentService, 
    StudentService, 
    UserService,
    User,
    Student, 
    AlumnoKey,
    Enrollment, 
    Notification} from '@app/core';

@Component({
    templateUrl: './enrollment-form.component.html'
})

export class EnrollmentFormComponent implements OnInit{

    id;
    form: FormGroup;
    title: string;
    enrollment = new Enrollment();
    studentKey = new AlumnoKey();

    date;
    user;
    student;
    students;
    studentsArray;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _enrollmentService: EnrollmentService,
        private _studentService: StudentService,
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _datePipe: DatePipe) {

        this.form = fb.group({
            alumno: ['', Validators.required],
            monto: ['', Validators.required],
            fecha: ['', Validators.required],
        });
    }

    ngOnInit() {
        this._route.params.subscribe( (params) => {
            this.id = params['id'];
            
            this.students = this._studentService.list(1,'','');
            this.students.subscribe((data) => {
                this.studentsArray = data.response;
            })

            this._userService.list(1,'','').subscribe( (data) => {
                this.user = data.response[0];
            });

            if (this.id){
                this.title = 'Editar matrícula';
                
                this._enrollmentService.find(this.id).subscribe( (c) => {
                    this.enrollment = c.response;
                    this.studentKey = this.enrollment.alumno.alumnoKey;
                    this.student = this.enrollment.alumno;
                    this.date = this._datePipe.transform(this.enrollment.fecha, 'yyyy-MM-dd');
                });
            } else {
                this.title = 'Crear matrícula';
            }
        });
    }

    submit() {
        if (null == this.form.errors) {
            this.enrollment.usuario = this.user;   

            if (this.id) { //Edit
                this.enrollment.idMatricula = this.id;
                
                if (typeof this.form.controls.alumno.value == 'string'){
                    this.enrollment.alumno = this.studentsArray
                    .find(x => x.alumnoKey.idAlumno == this.form.controls.alumno.value);
                } else {
                    this.enrollment.alumno = this.student;
                }

                if (typeof this.form.controls.fecha.value == 'string'){
                    this.enrollment.fecha = new Date(this.form.controls.fecha.value);
                } else {
                    this.enrollment.fecha = this.date;
                }
                this.enrollment.fecha.setDate(this.enrollment.fecha.getDate()+1);

                this._enrollmentService.edit(this.enrollment).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this._router.navigate(['enrollments']);
                            Notification.notify('La matrícula se actualizó exitosamente.', 'success');       
                        } else {
                            Notification.notify('Ha ocurrido un eror.', 'error');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un eror.', 'error')
                );
            } else { // Create
                this.enrollment.alumno = this.studentsArray
                                .find(x => x.alumnoKey.idAlumno == this.form.controls.alumno.value);
                                             
                this._enrollmentService.create(this.enrollment).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this._router.navigate(['enrollments']);
                            Notification.notify('La matrícula se creó exitosamente.', 'success');       
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