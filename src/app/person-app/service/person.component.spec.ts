import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAppComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonAppComponent;
  let fixture: ComponentFixture<PersonAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
