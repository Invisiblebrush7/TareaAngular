import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  noticias: any = [];
  cargando: Boolean = false;
  query: string = '';
  lastSearch: string = '';

  currentNews = {};

  @Output() onSendNews: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<void> = new EventEmitter();

  // se inicializa noticiasService como una propiedad de instancia de la clase
  constructor(private noticiasService: NoticiaService) {}

  /**
   * Get top headlines
   */
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

  /**
   * Get headlines with query
   */
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

  /**
   * Assign user-selected news to variable of currentNews
   */
  selectNews(noticia: any) {
    this.currentNews = noticia;
    this.onSendNews.emit(noticia);
  }
  /**
   * Clear the currentNews
   * This is called when we received the event from sibling
   */
  clearNews() {
    this.currentNews = {};
    this.onClear.emit();
  }

  ngOnInit(): void {
    /**
     * I use this method because I want to show top headlines when the user
     * is in /noticias without a query
     */
    this.search();
  }
}
