import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User|null> = new BehaviorSubject(null);
  public readonly user$: Observable<User|null> = this.user.asObservable();

  constructor() { }

  public login(email: string, password: string): Observable<User|null> {



    return of(new User());
  }

  public register(name: string, email: string, password: string): Observable<User|null> {



    return of(new User());
  }

  public logout(): Observable<null> {

    return of(null);
  }
}
