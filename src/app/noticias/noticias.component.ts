import { Component, Input, OnInit } from '@angular/core';
import { NoticiaService } from '../shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})

/**
 * This is the page of /noticias, it should contain both
 * the news-list and noticia-details components. Parent component
 */
export class NoticiasComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  currentNews: any = {};

  clearNews() {
    this.currentNews = {};
    console.log('Hi, Im clearing the news');
  }

  selectNews(noticia: any): void {
    this.currentNews = noticia;
    console.log('I received a news', noticia.title);
  }
}
