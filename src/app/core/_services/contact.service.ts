import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../_models/contact';
import { RestService } from './rest.service';

@Injectable()
export class ContactService extends RestService{

  constructor( protected _http: HttpClient ) {
    super(_http);
    this.relativeUrl = '/contacto';
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
  create(contact: Contact) {
    return this.post(this.relativeUrl, contact);
  }

  /**
   * Update contact to api with put method
   * @param contact
   */
  edit(contact: Contact) {
    return this.put(`${this.relativeUrl}/${contact.idContacto}`, contact);
  }

  remove(id: number) {
    return this.delete(this.relativeUrl, id);
  }
}
