import { Component, Input, OnInit } from '@angular/core';
import { NoticiaService } from '../shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})

/**
 * This is the page of /noticias, it should contain both
 * the news-list and noticia-details components
 */
export class NoticiasComponent implements OnInit {
  @Input() noticia: any = {};

  clearNews() {
    console.log('Hi, Im clearing the news');
  }
  constructor() {}
  ngOnInit(): void {}
}
