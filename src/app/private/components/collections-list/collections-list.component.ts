import { Component, OnInit } from '@angular/core';
import { CollectionInterface } from '../../interfaces/collection-interface';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss'],
})
export class CollectionsListComponent implements OnInit {
  public collection$!: Observable<CollectionInterface[]>;

  constructor(
    private _collectionService: CollectionService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.collection$ = this._collectionService.list();
  }
  onEdit(id: number) {
    this._router.navigate(['editar', id], { relativeTo: this._route });
  }
}
