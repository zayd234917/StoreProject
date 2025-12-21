import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { Userservice } from './userservice';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StoreProject');
  constructor(private user : Userservice, private route : Router){}
  signedIn : boolean = false;
  SignIn(){ 
    return this.user.signedIn;

  }
  SignedOut(){
    this.user.signedIn = false;
    this.route.navigate(['/signin']);

  }



}
