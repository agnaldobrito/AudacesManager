import { Component, OnInit } from '@angular/core';
import { CollectionInterface } from '../../interfaces/collection-interface';
import { CollectionService } from '../../services/collection.service';
import { ModelsService } from '../../services/models.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public collection!: CollectionInterface[];
  public average = 0;
  public total = 0;
  public totalCollections = 0;
  public totalModels = 0;

  constructor(
    private _collectionService: CollectionService,
    private _modelService: ModelsService
  ) {}

  ngOnInit(): void {
    this.orderedList();
    this.averageBudget();
    this.countCollections();
    this.countModels();
  }
  orderedList() {
    this._collectionService.list().subscribe((array) => {
      array.sort((a, b) => b.orcamento - a.orcamento);
      this.collection = array;
    });
  }
  countCollections() {
    this._collectionService.list().subscribe((array) => {
      for (let i = 0; i < array.length; i++) {
        this.totalCollections++;
      }
    });
  }
  countModels() {
    this._modelService.list().subscribe((array) => {
      for (let i = 0; i < array.length; i++) {
        this.totalModels++;
      }
    });
  }
  averageBudget() {
    this._collectionService.list().subscribe((array) => {
      array.forEach((budget) => {
        return (this.total += budget.orcamento);
      });
      return (this.average = this.total / array.length);
    });
  }
}
