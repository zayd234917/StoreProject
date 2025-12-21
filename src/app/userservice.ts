import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject ,map,Observable} from 'rxjs';
import { IUser,IUserCredentials } from '../models/User';
import { Signin } from './signin/signin';
@Injectable({
  providedIn: 'root',
})
export class Userservice {
   private baseUrl = 'http://localhost:3000/api';
   signedIn : boolean = false;
   sign! : Signin;
  private user: BehaviorSubject<IUser | null>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
  }

  getUser(): Observable<IUser | null> {
    return this.user.asObservable();
  }

  signIn(credentials: IUserCredentials, path : String): Observable<IUser> {
      this.signedIn = true;
    return this.http
      .post<IUser>(`${this.baseUrl+path }`, credentials)
      .pipe(map((user: IUser) => {
        this.user.next(user);
        return user;
      }));

  }

  signOut() {
    this.user.next(null);
     }
  
  addUser(email : String,password : String){
           this.http.post<IUser>(`${this.baseUrl}/register`,{email,password});
  }
  
}
