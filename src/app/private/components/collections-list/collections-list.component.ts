import { Component, OnInit } from '@angular/core';
import { CollectionInterface } from '../../interfaces/collection-interface';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss'],
})
export class CollectionsListComponent implements OnInit {
  public collection$!: Observable<CollectionInterface[]>;

  constructor(
    private _apiService: ApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.collection$ = this._apiService.collectionList();
  }
  onEdit(id: number) {
    this._router.navigate(['editar', id], { relativeTo: this._route });
  }
}
