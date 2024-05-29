import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {

  userForm : FormGroup;
  isFormSubmitted: boolean = false;

  constructor(){
    this.userForm =  new FormGroup({
   
      email:  new FormControl("",[Validators.required,Validators.email]),

    })
     
    
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.isFormSubmitted = true; // Set the flag to true when form is valid and submitted
      // Perform the email submission action, e.g., call a service to submit the email
      console.log('Email:', this.userForm.value.email);
      
      setTimeout(() => {
        this.isFormSubmitted = false;
      this.userForm.reset();

      }, 3000);

    } else {
      // Mark all fields as touched to trigger validation messages
      this.userForm.markAllAsTouched();
    }
  }
  }
