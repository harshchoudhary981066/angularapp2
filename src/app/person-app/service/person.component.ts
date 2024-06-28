import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({

 selector: 'app-person-app',

 standalone: true,

 imports: [CommonModule, FormsModule],

 templateUrl: './person-app.component.html',

 styleUrl: './person-app.component.css'

})

export class PersonAppComponent {

 personlist:Observable<Person[]>;

 constructor(private service:PersonService){

  this.personlist=service.getAll();

 }

}

