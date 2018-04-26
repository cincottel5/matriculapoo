import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { RestService } from './rest.service';

@Injectable()
export class StudentService extends RestService{
    
    constructor( protected _http: HttpClient ) { 
        super(_http);
        this.relativeUrl = '/alumno';
    }

    /**
     * List students from api with get method
     */
    list(page, sort, search) {
        let params = this.stringParams(page, sort, search);
        return this.get(`${this.relativeUrl}${params}`);
    }

    /**
     * Find student by id
     * @param id 
     */
    find(id: number){
        return this.get(`${this.relativeUrl}/${id}`);
    }

    /**
     * Create student to api with post method
     * @param student 
     */
    create(student: Student) {
        return this.post(this.relativeUrl, student);
    }

    /**
     * Update student to api with put method
     * @param student 
     */
    edit(student: Student) {
        return this.put(`${this.relativeUrl}/${student.alumnoKey.idAlumno}`, student);
    }

    remove(id: number) {
        return this.delete(this.relativeUrl, id);
    }
}