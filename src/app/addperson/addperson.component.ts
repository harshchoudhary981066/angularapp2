import { Component, Input } from '@angular/core';
import { Person } from '../person-app/model/person';
import { PersonService } from '../person-app/service/person.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addperson',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addperson.component.html',
  styleUrl: './addperson.component.css'
})
export class AddpersonComponent {
  msg:string = '';
@Input()  person:Person;

  constructor(private service:PersonService, private route:Router){
 
   this.person=new Person();
  }

  savePerson(){
    this.service.addPerson(this.person).subscribe(data => this.msg = "Record Addded", error => this.msg = error.error
    );
    console.log(this.msg)
  }

  showAll(){
    this.route.navigate(['/person-all-data'])
  }
}
