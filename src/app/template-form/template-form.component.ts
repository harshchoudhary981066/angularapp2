import { Component, Input } from '@angular/core';

import { Customer } from './model/Customer';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({

 selector: 'app-template-form',

 standalone: true,

 imports: [CommonModule, FormsModule],

 templateUrl: './template-form.component.html',

 styleUrl: './template-form.component.css'

})

export class TemplateFormComponent {

 @Input() customer:Customer;

 constructor(){

  this.customer=new Customer();

 }

}