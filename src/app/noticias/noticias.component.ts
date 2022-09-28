import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  noticias: any = [];
  cargando: Boolean = false;
  link: string = 'https://google.com';
  query: string = '';
  lastSearch: string = '';

  // se inicializa noticiasService como una propiedad de instancia de la clase
  constructor(private noticiasService: NoticiaService) {}

  search() {
    this.cargando = true;
    this.noticiasService.getNoticias().subscribe({
      next: (response) => {
        this.cargando = false;
        this.noticias = response;
      },
      error: (e: any) => {
        console.error(e);
      },
    });
  }
  searchWithQuery(): void {
    this.cargando = true;
    this.noticiasService.getNoticiasWithQuery(this.query).subscribe({
      next: (response) => {
        this.cargando = false;
        this.noticias = response;
        this.lastSearch = this.query;
        this.query = '';
      },
      error: (e: any) => {
        console.error(e);
      },
    });
  }

  ngOnInit(): void {
    this.search();
  }
}
