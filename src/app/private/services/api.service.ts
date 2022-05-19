import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CollectionInterface } from '../interfaces/collection-interface';
import { ModelsInterface } from '../interfaces/models-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly collectionURL = `${environment.api}/colecoes`;
  private readonly modelsURL = `${environment.api}/modelos`;

  constructor(private _httpClient: HttpClient) {}

  public collectionList(): Observable<CollectionInterface[]> {
    return this._httpClient.get<CollectionInterface[]>(this.collectionURL);
  }
  public loadIdCollection(id: number): Observable<CollectionInterface[]> {
    return this._httpClient
      .get<CollectionInterface[]>(`${this.collectionURL}/${id}`)
      .pipe(take(1));
  }
  public createCollection(collection: CollectionInterface) {
    return this._httpClient.post(this.collectionURL, collection).pipe(take(1));
  }

  public updateCollection(collection: CollectionInterface) {
    return this._httpClient
      .put(`${this.collectionURL}/${collection.id}`, collection)
      .pipe(take(1));
  }

  public modelsList() {
    return this._httpClient.get<ModelsInterface[]>(this.modelsURL);
  }
}
