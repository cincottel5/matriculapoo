import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { RestService } from './rest.service';

@Injectable()
export class UserService extends RestService{
    
    constructor( protected _http: HttpClient ) { 
        super(_http);
        this.relativeUrl = '/usuario';
    }

    /**
     * List users from api with get method
     */
    list(page, sort, search) {
        let params = this.stringParams(page, sort, search);
        return this.get(`${this.relativeUrl}${params}`);
    }

    /**
     * Find user by id
     * @param id 
     */
    find(id: number){
        return this.get(`${this.relativeUrl}/${id}`);
    }

    /**
     * Create user to api with post method
     * @param user 
     */
    create(user: User) {
        return this.post(this.relativeUrl, user);
    }

    /**
     * Update user to api with put method
     * @param user 
     */
    edit(user: User) {
        return this.put(`${this.relativeUrl}/${user.idUsuario}`, user);
    }

    remove(id: number) {
        return this.delete(this.relativeUrl, id);
    }
}