import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { RestResponse } from './rest-response';

/**
 * Class defines general information for api calls
 */
export abstract class RestService {
    /**
     * Base url for api spring 
     */
    protected baseUrl =  'http://localhost:8080/api/';

    constructor( protected _http: HttpClient ) { }

    /**
     * Define headers for api communication
     */
    protected setHeaders() {
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        };
        return httpOptions;
    }

    /**
     * Method create url params
     * @param params 
     */
    protected stringParams(page: number = 1, sort = null, search = null) {
        //let stringParams = `?size=${10}`;
        let stringParams = '';

        if (page != null && page != 1)  stringParams += `&page=${page}`;
        if (sort == null || sort != "") stringParams += `&sort=${sort}`;
        if (search == null || search != "") stringParams += `&search=${search}`;
        
        return (stringParams === '' ? '' : `?${this.stringParams}`);
    }

    /**
     * Get http calls to api go through this function
     */
    protected get(relativeUrl: string) {
        return this._http.get<RestResponse>(this.baseUrl+relativeUrl, this.setHeaders());
    }

    /**
     * Post http calls to api go through this function
     */
    protected post(relativeUrl: string, object: any ) {
        return this._http.post<RestResponse>(this.baseUrl+relativeUrl, JSON.stringify(object), this.setHeaders());
    }

    /**
     * Put http calls to api 
     * @param relativeUrl 
     * @param object 
     */
    protected put(relativeUrl: string, object: any ) {
        return this._http.put<RestResponse>(this.baseUrl+relativeUrl, JSON.stringify(object), this.setHeaders());
    }

    /**
     * Delete http calls to api
     * @param relativeUrl 
     * @param id 
     */
    protected delete(relativeUrl: string, id: number){
        if (id) {
            return this._http.delete<RestResponse>(this.baseUrl+relativeUrl+'/'+id, this.setHeaders());
        } else {
            throw new Error("No se puede ejecutar esta instrucción sin la definición del id");
        }
    }
}