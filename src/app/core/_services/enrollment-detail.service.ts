import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnrollmentDetail } from '../_models/enrollment-detail';
import { RestService } from './rest.service';

@Injectable()
export class EnrollmentDetailService extends RestService{
    
    constructor( protected _http: HttpClient ) { 
        super(_http);
        this.relativeUrl = '/detalle-matricula';
    }

    /**
     * Find enrollmentDetail by id
     * @param id 
     */
    find(id: number){
        return this.get(`${this.relativeUrl}/${id}`);
    }

    /**
     * Create enrollmentDetail to api with post method
     * @param enrollmentDetail 
     */
    create(enrollmentDetail: EnrollmentDetail) {
        return this.post(this.relativeUrl, enrollmentDetail);
    }

    /**
     * Update enrollmentDetail to api with put method
     * @param enrollmentDetail 
     */
    edit(enrollmentDetail: EnrollmentDetail) {
        return this.put(`${this.relativeUrl}/${enrollmentDetail.idDetalleMatricula}`, enrollmentDetail);
    }

    remove(id: number) {
        return this.delete(this.relativeUrl, id);
    }
}