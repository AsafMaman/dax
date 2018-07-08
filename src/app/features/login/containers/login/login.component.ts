import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<fromStore.LoginState>) {}
  currentState: any;
  loading$: Observable<boolean>;
  ngOnInit() {
    this.loading$ = this.store.select(fromStore.getLoginLoading);
  }

  onSubmit(e) {
    this.store.dispatch(
      new fromStore.Login({ user: e.userName, password: e.password })
    );
  }
}
