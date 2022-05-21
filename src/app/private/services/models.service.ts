import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelsInterface } from '../interfaces/models-interface';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {
  private readonly URL = `${environment.api}/modelos`;
  constructor(private _http: HttpClient) {}

  public list() {
    return this._http.get<ModelsInterface[]>(this.URL);
  }
  public loadByID(id: number) {
    return this._http.get(`${this.URL}/${id}`).pipe(take(1));
  }
  public create(models: ModelsInterface) {
    return this._http.post(this.URL, models).pipe(take(1));
  }
  public update(models: ModelsInterface) {
    return this._http.put(`${this.URL}/${models.id}`, models).pipe(take(1));
  }
  public remove(id: number) {
    return this._http.delete(`${this.URL}/${id}`).pipe(take(1));
  }
}
