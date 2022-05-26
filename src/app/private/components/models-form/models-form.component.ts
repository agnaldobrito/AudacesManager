import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public id!: any;
  public submitted = false;
  public collectionList$: Observable<CollectionInterface[]> =
    this._collectionService.list();
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
    this._route.params.subscribe((params: any) => {
      this.id = params['id'];
      const model$ = this._modelService.loadByID(this.id);
      model$.subscribe((info) => {
        this.updateForm(info);
      });
    });
  }

  public formGroup() {
    return (this.form = this._fb.group({
      id: null,
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      responsavel: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      tipo: [
        'Tipo do Modelo',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      colecao: [
        'Selecionar Coleção',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      bordado: false,
      estampa: false,
    }));
  }
  public updateForm(data: any) {
    this.form.patchValue({
      id: data.id,
      nome: data.nome,
      responsavel: data.responsavel,
      tipo: data.tipo,
      colecao: data.colecao,
      bordado: data.bordado,
      estampa: data.estampa,
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      if (this.form.value.id) {
        this._modelService.update(this.form.value).subscribe();
        this.onRefresh();
        this._location.back();
      } else {
        this._modelService.create(this.form.value).subscribe();
        this.onRefresh();
        this._location.back();
      }
    }
  }
  public onCancel() {
    this._location.back();
  }
  public onDelete() {
    this._modelService.remove(this.id).subscribe();
    this.onRefresh();
    this._location.back();
  }
  public onRefresh() {
    this._modelService.list();
  }
}
