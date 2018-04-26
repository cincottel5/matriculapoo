import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../_models/course';
import { RestService } from './rest.service';

@Injectable()
export class CourseService extends RestService{
    
    constructor( protected _http: HttpClient ) { 
        super(_http);
        this.relativeUrl = '/materia';
    }

    /**
     * List course from api with get method
     */
    list(page, sort, search) {
        let params = this.stringParams(page, sort, search);
        return this.get(`${this.relativeUrl}${params}`);
    }

    /**
     * Find course by id
     * @param id 
     */
    find(id: number){
        return this.get(`${this.relativeUrl}/${id}`);
    }

    /**
     * Create course to api with post method
     * @param course 
     */
    create(course: Course) {
        return this.post(this.relativeUrl, course);
    }

    /**
     * Update course to api with put method
     * @param course 
     */
    edit(course: Course) {
        return this.put(`${this.relativeUrl}/${course.idMateria}`, course);
    }

    remove(id: number) {
        return this.delete(this.relativeUrl, id);
    }
}