import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionInterface } from '../../interfaces/collection-interface';
import { ApiService } from '../../services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-collections-form',
  templateUrl: './collections-form.component.html',
  styleUrls: ['./collections-form.component.scss'],
})
export class CollectionsFormComponent implements OnInit {
  public form!: FormGroup;
  public submitted = false;
  public collection$!: Observable<CollectionInterface[]>;

  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.formGroup();
    this._route.params.subscribe((params: any) => {
      const id = params['id'];
      console.log(id);
      const collection$ = this._apiService.loadIdCollection(id);
      collection$.subscribe((itemName) => {
        this.updateForm(itemName);
      });
    });
  }
  public formGroup() {
    return (this.form = this._fb.group({
      id: null,
      colecao: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      responsavel: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      estacao: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      marca: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      orcamento: null,
      ano: null,
    }));
  }
  public updateForm(data: any) {
    this.form.patchValue({
      id: data.id,
      colecao: data.colecao,
      responsavel: data.responsavel,
      estacao: data.estacao,
      marca: data.marca,
      orcamento: data.orcamento,
      ano: data.ano,
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      if (this.form.value.id) {
        this._apiService.updateCollection(this.form.value).subscribe();
        this._location.back();
      } else {
        this._apiService.createCollection(this.form.value).subscribe();
        this._location.back();
      }
    }
  }
  public onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
