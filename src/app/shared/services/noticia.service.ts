import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private http: HttpClient) {}

  getNoticias(): Observable<Object> {
    return this.http.get(environment.apiUrl + 'news');
  }

  getNoticiasWithQuery(q: string): Observable<Object> {
    return this.http.get(environment.apiUrl + 'search/' + '?q=' + q);
  }
}
