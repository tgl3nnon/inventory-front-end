import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Beer } from './beer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private http: HttpClient) {}

  backEndUrl = 'http://localhost:8080';

  getBeers(): Observable<Beer[]> {
    const apiUrl = '/beers';
    return this.http.get<Beer[]>(this.backEndUrl + apiUrl);
  }
}
