import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() backgroudColor = 'bg-success';
  @Output() footerClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
  footerClicked() {
    this.footerClick.emit();
  }
}
