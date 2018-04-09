import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classroom } from '../_models/classroom';
import { RestService } from './rest.service';

@Injectable()
export class ClassroomService extends RestService{
    
    constructor( protected _http: HttpClient ) { 
        super(_http);
    }

    /**
     * List classrooms from api with get method
     */
    list(page, sort, search) {
        let params = this.stringParams(page, sort, search);
        return this.get(`/aula${params}`);
    }

    /**
     * Find classroom by id
     * @param id 
     */
    find(id: number){
        return this.get(`/aula/${id}`);
    }

    /**
     * Create classroom to api with post method
     * @param classroom 
     */
    create(classroom: Classroom) {
        return this.post('/aula', classroom);
    }

    /**
     * Update classroom to api with put method
     * @param classroom 
     */
    edit(classroom: Classroom) {
        return this.put(`/aula/${classroom.idAula}`, classroom);
    }

    remove(id: number) {
        return this.delete('/aula', id);
    }
}