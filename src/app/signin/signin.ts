import { Component } from '@angular/core';
import { IUserCredentials ,IUser} from '../../models/User';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Userservice } from '../userservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  standalone: true,
  templateUrl: './signin.html',
  styleUrl: './signin.css', 
})
export class Signin {
credentials : IUserCredentials = {email:'',password:''}
  signInError: boolean = false;
  signedIn : boolean = false;
  constructor(private userService : Userservice, private router: Router) { }

  signIn() {
    this.signedIn = true;
    this.userService.signedIn = this.signedIn;
    this.signInError = false;
    this.userService.signIn(this.credentials , "/signin").subscribe({
      next: (user) => {this.router.navigate(['/catalog']);
          console.log(user);  
      },
      error: () => (this.signInError = true)
    });

  }


}
