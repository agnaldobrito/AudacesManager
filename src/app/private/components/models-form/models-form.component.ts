import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelsInterface } from '../../interfaces/models-interface';
import { ModelsService } from '../../services/models.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-models-form',
  templateUrl: './models-form.component.html',
  styleUrls: ['./models-form.component.scss'],
})
export class ModelsFormComponent implements OnInit {
  public form!: FormGroup;
  public submitted = false;
  public model$!: Observable<ModelsInterface[]>;

  constructor(
    private _fb: FormBuilder,
    private _modelService: ModelsService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {}

  public onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      if (this.form.value.id) {
        this._modelService.update(this.form.value).subscribe();
        this._location.back();
      } else {
        this._modelService.create(this.form.value).subscribe();
        this._location.back();
      }
    }
  }
  public onCancel() {
    this.submitted = false;
    this.form.reset();
    this._location.back();
  }
  public onDelete(modelo: ModelsInterface) {
    this._modelService.remove(modelo.id).subscribe();
  }
}
