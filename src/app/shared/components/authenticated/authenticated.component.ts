import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss'],
})
export class AuthenticatedComponent implements OnInit {
  constructor() {}
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!',
  ];
  ngOnInit() {}
}
