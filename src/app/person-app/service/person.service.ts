import {HttpClient } from '@angular/common/http';

import {Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class PersonService{

  constructor(private http:HttpClient) {

  }

  getAll():Observable<any>{

    return this.http.get("http://localhost:9090/allPerson");

  }

}

