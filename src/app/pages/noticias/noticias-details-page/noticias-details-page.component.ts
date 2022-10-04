import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias-details-page',
  templateUrl: './noticias-details-page.component.html',
  styleUrls: ['./noticias-details-page.component.scss'],
})
export class NoticiasDetailsPageComponent implements OnInit {
  constructor(
    private noticiasService: NoticiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  noticia: Noticia = {
    title: '',
    description: '',
    url: '',
    urlToImage: '',
  };

  title: String = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      console.log('Params', p);
      this.title = p['titulo'];
    });

    this.noticia = this.noticiasService.currentNoticia;
    if (this.noticia.title !== this.title) {
      this.router.navigate(['..'], {
        relativeTo: this.activatedRoute,
      });
    }
  }
}
