import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { checkPrime } from 'crypto';


@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  // nx=["1","2"];
  countries = [
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

  numbers =  [
    { name: '1',  checked: false },
    { name: '2',  checked: false },
  ]

  reactiveForm: FormGroup =new FormGroup({
    firstname : new FormControl("", [
      Validators.required, 
      Validators.pattern(/^[a-zA-Z ]+$/gm),
      Validators.minLength(3), 
      
    ]),
    lastname : new FormControl("", [
      Validators.required, 
      Validators.pattern(/^[a-zA-Z ]+$/gm),
      Validators.minLength(3), 
      
    ]),
    password : new FormControl("",
      [
        Validators.required, 
        Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
        Validators.minLength(8),
        
      ]
    ),
    email: new FormControl("", [
        Validators.required, 
        Validators.email
      ]
    ),
    country: new FormControl(
      "",
      Validators.required
    ),
    document: new FormControl("", Validators.required),
    mobile: new FormControl("", [
        Validators.required, 
        Validators.pattern(/^[0-9]+$/gm)
      ]
    ),
    address: new FormControl("", [
      Validators.required
    ]),
    age: new FormControl("", Validators.required),
    language: new FormControl(["Tamil"], Validators.required),
    hobbies :new FormControl("", Validators.required),
    gender : new FormControl("", Validators.required),
    human: new FormControl("You are Human"),
    choice :new FormControl("Enjoyment", Validators.required),
    numbers: new FormArray([
    ],Validators.required),

  });;

  

  ngOnInit(){
  }

  addnumbers(event:any){
    let checked = event.target.checked;
    let value = event.target.value;
    const x = this.reactiveForm.get('numbers') as FormArray;
    if(checked){
      x.push(new FormControl(value));
    }
    if(!checked){
      // x.remove(new FormControl(value));
    }
  }

  showErrorMessage(field:string){
    return (this.reactiveForm.get(field)?.invalid && this.reactiveForm.get(field)?.touched)
  }

  formSubmit(){
    // if(this.reactiveForm.valid){
      console.log(this.reactiveForm);
    // }
  }
}
