import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { 
    EnrollmentService, 
    StudentService, 
    UserService,
    CourseService,
    User,
    Student, 
    AlumnoKey,
    Enrollment, 
    Notification,
    EnrollmentDetailService} from '@app/core';
import { EnrollmentDetail } from '@app/core/_models/enrollment-detail';

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
    courses;
    coursesArray;
    selectCoursesArray = [];
    enrollmentDetails;
    enrollmentDetailsArray = [];
    dbEnrollments;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _enrollmentService: EnrollmentService,
        private _studentService: StudentService,
        private _enrollmentDetailService: EnrollmentDetailService,
        private _courseService: CourseService,
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _datePipe: DatePipe) {

        this.form = fb.group({
            alumno: ['', Validators.required],
            monto: ['', Validators.required],
            fecha: ['', Validators.required],
            curso: ['', Validators.required],
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

                    this.enrollmentDetails = this._enrollmentDetailService.find(this.enrollment.idMatricula);
                    this.enrollmentDetails.subscribe( (erRes) => {
                        if (erRes.response.length > 0) {
                            this.enrollmentDetailsArray = erRes.response;
                            for (let rc of erRes.response) {
                                this.selectCoursesArray.push(rc.materia);
                            }
                        }
                        
                    })
                });
            } else {
                this.title = 'Crear matrícula';
            }

            this.courses = this._courseService.list(1,'','');
            this.courses.subscribe( (data) => {
                this.coursesArray = data.response;
            });
        });
    }

    submit() {
        if (null == this.form.errors && this.selectCoursesArray.length > 0) {
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
                            this.saveCourses(data.response);
                        } else {
                            Notification.notify('Ha ocurrido un eror.', 'error');       
                        }
                    },
                    error => Notification.notify('Ha ocurrido un eror.', 'error')
                );
            } else { // Create
                this.enrollment.alumno = this.studentsArray
                    .find(x => x.alumnoKey.idAlumno == this.form.controls.alumno.value);
                
                if (this.enrollment.fecha == null) {
                    this.enrollment.fecha = new Date(this.form.controls.fecha.value);
                    this.enrollment.fecha.setDate(this.enrollment.fecha.getDate()+1);
                }
                
                this._enrollmentService.create(this.enrollment).subscribe(
                    data => {
                        if (data.httpStatus == 200) {
                            this.saveCourses(data.response);
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

    /**
     * 
     */
    addCourse(){
        if (this.form.controls.curso.valid) {   
            let newCourse = this.coursesArray.find(x => x.idMateria == this.form.controls.curso.value);
            
            if (this.selectCoursesArray.find(x=> x.idMateria == newCourse.idMateria) == null) {
                this.selectCoursesArray.push(newCourse);    
            } else {
                Notification.notify('Esa materia ya se agregó');
            }  
        } else {
            Notification.notify('No se ha especificado un curso');
        }
    }

    /**
     * Remove course from list and database
     * @param id 
     */
    removeCourse(id:number){
        let enDetail = this.selectCoursesArray.find(x=> x.idMateria ==id);
        
        if (enDetail != null) {
            if (this.id) {
                let enrollDetail = this.enrollmentDetailsArray.find(x => x.materia.idMateria == id);
                this._enrollmentDetailService.remove(enrollDetail.idDetalleMatricula).subscribe( (data) => {
                    if (data.httpStatus == 200) {
                        Notification.notify('El registro se eliminó exitosamente', 'success');
                    }
                });
            }
            
            this.selectCoursesArray = this.selectCoursesArray.filter(x=> x.idMateria != id);
        }
    }

    /**
     * Save enrollments in database
     * @param enrollment 
     */
    saveCourses(enrollment: Enrollment) {
        let errorOnEdCreate = false;
        for (let cos of this.selectCoursesArray) {
            if(this.enrollmentDetailsArray.find(x => x.materia.idMateria == cos.idMateria) != null){
                continue;
            }

            let newEd = new EnrollmentDetail();
            newEd.matricula = enrollment;
            newEd.materia = cos;

            this._enrollmentDetailService.create(newEd).subscribe(
                data => {
                    if (data.httpStatus != 200) {
                        Notification.notify('Ha ocurrido un eror.', 'error');       
                        errorOnEdCreate = true;
                    }
                },
                error => Notification.notify('Ha ocurrido un eror.', 'error')
            );
        }

        if (!errorOnEdCreate) {
            this._router.navigate(['enrollments']);
            Notification.notify('La matrícula se creó exitosamente.', 'success');       
        }
    }
}