import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Noticia } from 'src/app/shared/interfaces/noticia';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  private noticia: Noticia = {
    title: '',
    description: '',
    url: '',
    urlToImage: '',
  };
  //  Puede ser privada porque no necesitas leer este atributo desde ningun componente
  private favsCount: number = 0;
  favsObservable: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<Object> {
    return this.http.get(environment.apiUrl + 'news');
  }

  getNoticiasWithQuery(q: string): Observable<Object> {
    return this.http.get(environment.apiUrl + 'search/' + '?q=' + q);
  }

  setCurrentNoticia(noticia: Noticia) {
    this.noticia = noticia;
    localStorage.setItem('noticia', JSON.stringify(this.noticia));
  }

  get currentNoticia(): Noticia {
    if (!this.noticia.title) {
      const newsDefault: Noticia = {
        title: '',
        description: '',
        url: '',
        urlToImage: '',
      };
      this.noticia = JSON.parse(
        localStorage.getItem('noticia') || JSON.stringify(newsDefault)
      );
    }
    return this.noticia;
  }

  updateFavs(fav: Boolean) {
    this.favsCount = fav ? this.favsCount + 1 : this.favsCount - 1;
    this.favsObservable.next(this.favsCount);
  }
}
