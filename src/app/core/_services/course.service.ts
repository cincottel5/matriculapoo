import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../_models/course';
import { RestService } from './rest.service';

@Injectable()
export class CourseService extends RestService{

    constructor( protected _http: HttpClient ) {
        super(_http);
    }

    /**
     * List course from api with get method
     */
    list(page, sort, search) {
        let params = this.stringParams(page, sort, search);
        return this.get(`/materia${params}`);
    }

    /**
     * Find materia by id
     * @param id
     */
    find(id: number) {
        return this.get(`/materia/${id}`);
    }

    /**
     * Create Course to api with post method
     * @param Course
     */
    create(course: Course) {
        return this.post('/materia', course);
    }

    /**
     * Update Course to api with put method
     * @param classroom
     */
    edit(course: Course) {
        return this.put(`/materia/${course.idMateria}`, course);
    }

    /**
     * Remove career to api with delete method
     * @param id
     */
    remove(id: number) {
        return this.delete('/materia', id);
    }
}
