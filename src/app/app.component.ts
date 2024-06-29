import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PersonAppComponent } from './person-app/service/person.component';
import { CustomerComponent } from './customer/customer.components';
import { AddpersonComponent } from './addperson/addperson.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateFormComponent,RouterLink,PersonAppComponent,CustomerComponent, AddpersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularapp1';
}
