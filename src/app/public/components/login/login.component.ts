import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  invalid: boolean = false;
  constructor(private _fb: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this._router.navigate(['../user']);
    }
  }
}
