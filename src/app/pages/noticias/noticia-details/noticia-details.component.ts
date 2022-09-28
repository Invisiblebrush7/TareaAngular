import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-noticia-details',
  templateUrl: './noticia-details.component.html',
  styleUrls: ['./noticia-details.component.scss'],
})
export class NoticiaDetailsComponent implements OnInit {
  @Input('item') noticia: any = {}; // 'item' es un alias
  @Input() test: any = '';

  @Output() onClear: EventEmitter<void> = new EventEmitter();

  clearNewsDetails() {
    this.onClear.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
