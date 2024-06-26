import { Component } from '@angular/core';



import { Customer } from './customer';

import { CommonModule } from '@angular/common';

@Component({

 selector: 'app-customer',

 standalone: true,

 imports: [CommonModule],

 templateUrl: './customer.component.html',

 styleUrl: './customer.component.css'

})

export class CustomerComponent {

 customer:Customer=new Customer();

 customer1:Customer[];

 constructor()

{

 this.customer1=[

 {"customerId":10001,"customerName":"pawan kumar","customerSalary":20000},

 {"customerId":10002,"customerName":"amit kumar","customerSalary":25000},

 {"customerId":10003,"customerName":"raman kumar","customerSalary":14000},

 {"customerId":10004,"customerName":"shiv kumar","customerSalary":15000},

 {"customerId":10005,"customerName":"anand kumar","customerSalary":70000},

 {"customerId":10006,"customerName":"harsit kumar","customerSalary":68000},

 ]

}

}