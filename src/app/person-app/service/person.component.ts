import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { PersonService } from './person.service';

@Component({

 selector: 'app-person-app',

 standalone: true,

 imports: [CommonModule, FormsModule],

 templateUrl: './person.component.html',

 styleUrl: './person.component.css'

})

export class PersonAppComponent {

 personlist:Observable<Person[]>;

 constructor(private service:PersonService){

  this.personlist=service.getAll();

 }

}

