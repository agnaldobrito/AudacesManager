import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelsInterface } from '../../interfaces/models-interface';
import { ModelsService } from '../../services/models.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CollectionService } from '../../services/collection.service';
import { CollectionInterface } from '../../interfaces/collection-interface';

@Component({
  selector: 'app-models-form',
  templateUrl: './models-form.component.html',
  styleUrls: ['./models-form.component.scss'],
})
export class ModelsFormComponent implements OnInit {
  public form!: FormGroup;
  public submitted = false;
  public model$!: Observable<ModelsInterface[]>;
  public collectionList$!: Observable<CollectionInterface[]>;
  public modelTypes = [
    'Bermuda',
    'Biquini',
    'Bolsa',
    'Boné',
    'Calça',
    'Calçados',
    'Camisa',
    'Chapéu',
    'Saia',
  ];

  constructor(
    private _fb: FormBuilder,
    private _collectionService: CollectionService,
    private _modelService: ModelsService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.formGroup();
    this.collectionList$ = this._collectionService.list();
  }

  public formGroup() {
    return (this.form = this._fb.group({
      id: null,
      nome: [
        '',
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
      tipo: [
        'Tipo do Modelo',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      colecao: [
        'Selecionar Coleção',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      bordado: false,
      estampa: false,
    }));
  }

  public onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      if (this.form.value.id) {
        this._modelService.update(this.form.value).subscribe();
        this._location.back();
      } else {
        this._modelService.create(this.form.value).subscribe();
        console.log(this.form.value);
        this._location.back();
      }
    }
  }
  public onCancel() {
    this.form.reset();
    this._location.back();
  }
  public onDelete(modelo: ModelsInterface) {
    this._modelService.remove(modelo.id).subscribe();
  }
}
