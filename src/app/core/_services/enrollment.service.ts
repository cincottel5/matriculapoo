import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enrollment } from '../_models/enrollment';
import { RestService } from './rest.service';

@Injectable()
export class EnrollmentService extends RestService{
    
    constructor( protected _http: HttpClient ) { 
        super(_http);
        this.relativeUrl = '/matricula';
    }

    /**
     * List enrollments from api with get method
     */
    list(page, sort, search) {
        let params = this.stringParams(page, sort, search);
        return this.get(`${this.relativeUrl}${params}`);
    }

    /**
     * Find enrollment by id
     * @param id 
     */
    find(id: number){
        return this.get(`${this.relativeUrl}/${id}`);
    }

    /**
     * Create enrollment to api with post method
     * @param enrollment 
     */
    create(enrollment: Enrollment) {
        return this.post(this.relativeUrl, enrollment);
    }

    /**
     * Update enrollment to api with put method
     * @param enrollment 
     */
    edit(enrollment: Enrollment) {
        return this.put(`${this.relativeUrl}/${enrollment.idMatricula}`, enrollment);
    }

    remove(id: number) {
        return this.delete(this.relativeUrl, id);
    }
}