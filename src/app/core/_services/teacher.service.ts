import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../_models/teacher';
import { RestService } from './rest.service';

@Injectable()
export class TeacherService extends RestService{
    
    constructor( protected _http: HttpClient ) { 
        super(_http);
    }

    /**
     * List classrooms from api with get method
     */
    list(page, sort, search) {
        let params = this.stringParams(page, sort, search);
        return this.get(`/profesor${params}`);
    }

    /**
     * Find classroom by id
     * @param id 
     */
    find(id: number){
        return this.get(`/profesor/${id}`);
    }

    /**
     * Create classroom to api with post method
     * @param classroom 
     */
    create(teacher: Teacher) {
        return this.post('/profesor', teacher);
    }

    /**
     * Update classroom to api with put method
     * @param classroom 
     */
    edit(teacher: Teacher) {
        return this.put(`/profesor/${teacher.profesorKey.idProfesor}`, teacher);
    }

    remove(id: number) {
        return this.delete('/profesor', id);
    }
}