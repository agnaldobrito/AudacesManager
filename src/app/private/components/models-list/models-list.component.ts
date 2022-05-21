import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty, Observable } from 'rxjs';
import { ModelsInterface } from '../../interfaces/models-interface';
import { ModelsService } from '../../services/models.service';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss'],
})
export class ModelsListComponent implements OnInit {
  public model$!: Observable<ModelsInterface[]>;

  constructor(
    private _modelService: ModelsService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.model$ = this._modelService.list();
  }
  onEdit(id: number) {
    this._router.navigate(['editar', id], { relativeTo: this._route });
  }
}
