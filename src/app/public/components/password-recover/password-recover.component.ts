import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.scss'],
})
export class PasswordRecoverComponent implements OnInit {
  form!: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this._router.navigate(['/login']);
    }
    console.log(this.form.valid);
  }
}
