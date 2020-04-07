import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonValidator } from 'src/app/common-validator';
import { LoginService } from '../login.service';
import { Token } from './Token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: Observable<object>;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('',
      [CommonValidator.startWithNumber, Validators.minLength(2), Validators.required],
      [CommonValidator.userTaken]),
      password: new FormControl('', [Validators.minLength(4)])
    });
  }

  sendLogin() {
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;

    this.service.login(username, password).subscribe(
      (token: Token) => sessionStorage.setItem('token', token.access_token));
  }

}
