import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CustomerComponent } from './customer/customer.components';
import { PersonAppComponent } from './person-app/service/person.component';
import { TemplateFormComponent } from './template-form/template-form.component';

export const routes: Routes = [
    {
        path: '', component: CalculatorComponent
    },
    {
        path: 'calculator', component: CalculatorComponent
    },
    {
        path: 'customer', component: CustomerComponent
    },
    {
        path: 'person', component: PersonAppComponent
    },
    {
        path: 'person-all-data', component: PersonAppComponent
    },
    {
        path: 'template', component: TemplateFormComponent
    }
];
