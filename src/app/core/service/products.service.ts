import { baseUrlProducts } from './../apiRoot/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { baseUrl } from '../apiRoot/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {};

  allProducts(): Observable<any> {
    // return this._httpClient.get(`${baseUrl}/get`);
    return this._httpClient.get(`${baseUrlProducts}`);
  };

  getDetails(id: string): Observable<any> {
    return this._httpClient.get(`${baseUrlProducts}/${id}`);
  };
}
