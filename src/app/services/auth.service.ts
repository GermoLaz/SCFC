import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    // Simula una llamada a una API de autenticación
    return of({ username, password }).pipe(
      // Simula un retraso de red
      delay(1000),
      // Simula una comprobación de autenticación
      map(credentials => credentials.username === 'user@gmail.com' && credentials.password === 'password')
    );
  }
}
