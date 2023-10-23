import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  authError: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private fireAuth: AngularFireAuth) {}
  login(email: string, password: string) {
    this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        this.isUserLoggedIn.next(true);
        // this.saveTokenToStorage(user?.multiFactor);
      })
      .catch((error) => {
        console.log(error);

        const errorCode = error.code;
        const errorMessage = error.message;
        this.isUserLoggedIn.next(false);
        this.authError.next(errorMessage)
      });
  }

  logout() {
    this.fireAuth.signOut();
    this.isUserLoggedIn.next(false);
  }

  private saveTokenToStorage(token: string) {
    localStorage.setItem('accessToken', token);
  }
  private deleteTokenFromStorage() {
    localStorage.removeItem('accessToken');
  }
}
