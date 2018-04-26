import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../_models/person';
import { RestService } from './rest.service';

@Injectable()
export class PersonService extends RestService{
    
    constructor( protected _http: HttpClient ) { 
        super(_http);
        this.relativeUrl = '/persona';
    }

    /**
     * List persons from api with get method
     */
    list(page, sort, search) {
        let params = this.stringParams(page, sort, search);
        return this.get(`${this.relativeUrl}${params}`);
    }

    /**
     * Find person by id
     * @param id 
     */
    find(id: number){
        return this.get(`${this.relativeUrl}/${id}`);
    }

    /**
     * Create person to api with post method
     * @param person 
     */
    create(person: Person) {
        return this.post(this.relativeUrl, person);
    }

    /**
     * Update person to api with put method
     * @param person 
     */
    edit(person: Person) {
        return this.put(`${this.relativeUrl}/${person.idPersona}`, person);
    }

    remove(id: number) {
        return this.delete(this.relativeUrl, id);
    }
}