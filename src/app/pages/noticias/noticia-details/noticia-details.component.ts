import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-noticia-details',
  templateUrl: './noticia-details.component.html',
  styleUrls: ['./noticia-details.component.scss'],
})
export class NoticiaDetailsComponent implements OnInit, OnChanges {
  @Input() noticia: any = {}; // 'item' es un alias

  @Output() clearNewsEvent = new EventEmitter<void>();

  clearNewsDetails() {
    console.log('Clear from noticias details component');
    this.clearNewsEvent.emit();
  }

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ', changes);
  }

  ngOnInit(): void {}
}
