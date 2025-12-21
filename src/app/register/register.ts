import { Component } from '@angular/core';
import { IUserCredentials } from '../../models/User';
import { NgModel } from '@angular/forms';
import { FormsModule , } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Userservice } from '../userservice';
import { Router , RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registred : boolean = false;
   credentials : IUserCredentials = {email:'',password:''}
   constructor( private serve : Userservice , private router : Router){}

   signIn() {
      this.registred = true;
      this.serve.signedIn = this.registred;
      this.serve.signIn(this.credentials , '/register').subscribe({
       next: (user) => {
        this.serve.addUser(this.credentials.email , this.credentials.password);
        this.router.navigate(['/catalog']);
          console.log(user);  
      },
      error: () => (this.registred = false)
    });
    
   }
   

}
