import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router : Router){}
    goToCatalog(){
this.router.navigate(['/catalog/all']);
    }
    goToSignIn(){
      this.router.navigate(['/signin']);
    }
}
