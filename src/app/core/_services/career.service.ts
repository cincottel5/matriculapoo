import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Career } from '../_models/career';
import { RestService } from './rest.service';

@Injectable()
export class CareerService extends RestService{
    
    constructor( protected _http: HttpClient ) { 
        super(_http);
    }

    /**
     * List carrer from api with get method
     */
    list(page, sort, search) {
        let params = this.stringParams(page, sort, search);
        return this.get(`/carrera${params}`);
    }

    /**
     * Find carrer by id
     * @param id 
     */
    find(id: number){
        return this.get(`/carrera/${id}`);
    }

    /**
     * Create career to api with post method
     * @param career 
     */
    create(career: Career) {
        return this.post('/carrera', career);
    }

    /**
     * Update career to api with put method
     * @param classroom 
     */
    edit(career: Career) {
        return this.put(`/carrera/${career.idCarrera}`, career);
    }

    /**
     * Remove carrer to api with delete method
     * @param id 
     */
    remove(id: number) {
        return this.delete('/carrera', id);
    }
}