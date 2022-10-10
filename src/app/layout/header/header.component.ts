import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  favoritos: number = 0;

  constructor(private noticiasService: NoticiaService) {}

  ngOnInit(): void {
    this.noticiasService.favsObservable.subscribe((newFavsCount: number) => {
      this.favoritos = newFavsCount;
    });
  }
}
