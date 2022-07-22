import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface securityQuestion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  securityQuestion: securityQuestion[] = [
    {
      value: 'Where did you meet your spouse?',
      viewValue: 'Where did you meet your spouse?',
    },
    {
      value: 'What is you favourite color?',
      viewValue: 'What is you favourite color?',
    },
    {
      value: 'What is your favourite book?',
      viewValue: 'What is your favourite book?',
    },
    {
      value: 'What is your favourite book?',
      viewValue: 'What is your favourite book?',
    },
  ];
  constructor() {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {}
}
