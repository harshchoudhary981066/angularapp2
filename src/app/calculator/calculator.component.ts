import { CommonModule } from '@angular/common';

import { Component,Input } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({

 selector: 'app-calculator',

 standalone: true,

 imports: [CommonModule, FormsModule,CalculatorComponent],

 templateUrl: './calculator.component.html',

 styleUrl: './calculator.component.css'

})

export class CalculatorComponent {

 @Input() n1:number;

 @Input() n2:number;

 constructor(){

  this.n1=0;

  this.n2=0;

 }

 addition()

 {

  alert(this.n1+this.n2)

 }

 subtraction()

 {

  alert(this.n1-this.n2)

 }

 multiplication()

 {

  alert(this.n1*this.n2)

 }

 division()

 {

  alert(this.n1/this.n2)

 }

}