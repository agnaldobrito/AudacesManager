import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CollectionInterface } from '../interfaces/collection-interface';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private readonly URL = `${environment.api}/colecoes`;

  constructor(private _http: HttpClient) {}

  public list() {
    return this._http.get<CollectionInterface[]>(this.URL);
  }
  public loadByID(id: number) {
    return this._http.get(`${this.URL}/${id}`).pipe(take(1));
  }
  public create(collection: CollectionInterface) {
    return this._http.post(this.URL, collection).pipe(take(1));
  }
  public update(collection: CollectionInterface) {
    return this._http
      .put(`${this.URL}/${collection.id}`, collection)
      .pipe(take(1));
  }
}
