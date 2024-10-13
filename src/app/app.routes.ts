import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const routes: Routes = [
    // { path : "" , loadChildren : ()=> import('./reactive-form').then(m=>{ReactiveFormsComponent})},
    { 
        path : "reactive-form" , 
        component : ReactiveFormsComponent
    }
];
