import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-noticia-details',
  templateUrl: './noticia-details.component.html',
  styleUrls: ['./noticia-details.component.scss'],
})
export class NoticiaDetailsComponent implements OnInit {
  @Input() noticia: any = {}; // 'item' es un alias

  @Output() clearNewsEvent: EventEmitter<void> = new EventEmitter();

  clearNewsDetails() {
    this.clearNewsEvent.emit();
  }

  constructor() {}
  ngOnInit(): void {}
}
