// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/main-page']);
      } else {
        // manejar error de inicio de sesión
      }
    });
  }
}
