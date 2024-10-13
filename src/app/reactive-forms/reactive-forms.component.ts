import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  countries = [
    '--- Select ---',
    'India',
    'USA',
    'UK',
    'UAE'
  ];

  hobbies = [
    'Painting',
    'Drawing',
    'Singing',
    'Dancing'
  ];

  reactiveForm: FormGroup = new FormGroup({
    firstname : new FormControl("", Validators.required),
    lastname : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required),
    document: new FormControl("", Validators.required),
    mobile: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    language: new FormControl("", Validators.required),
    hobbies :new FormControl("", Validators.required),
    gender :new FormControl("Male", Validators.required),
    human:new FormControl("", Validators.required),
    numbers:new FormControl("1", Validators.required),

  });

  ngOnInit(){
    // console.log("Chetan");
  }

  formSubmit(){

  }
}
