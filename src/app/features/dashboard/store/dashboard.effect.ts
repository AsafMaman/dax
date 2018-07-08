import { Injectable } from '@angular/core';
import { OrderService } from '../../../core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, combineLatest } from 'rxjs';
import * as fromDashboardActions from './dashboard.actions';
import { map, switchMap, mergeMap, catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../store';

@Injectable()
export class DashboardEffects {
  constructor(
    private store: Store<any>,
    private orderService: OrderService,
    private actions$: Actions
  ) {}

  @Effect()
  TotalOrders: Observable<fromDashboardActions.All> = this.actions$
    .ofType(fromDashboardActions.TOTAL_ORDERS)
    .pipe(
      map((action: fromDashboardActions.TotalOrders) => action.payload),
      switchMap(payload =>
        this.orderService
          .getTotalOrders(payload)
          .pipe(
            map(
              (res: any) => new fromDashboardActions.TotalOrdersSuccess(res),
              catchError(error =>
                of(new fromDashboardActions.TotalOrdersFailde(error))
              )
            )
          )
      )
    );

  @Effect()
  getOrders: Observable<
    fromDashboardActions.GetOrdersSuccess
  > = this.actions$.ofType(fromDashboardActions.GET_ORDERS).pipe(
    mergeMap((action: fromDashboardActions.GetOrders) =>
      combineLatest(
        this.store.select(fromStore.getOrgUnitId),
        of(action.payload)
      )
    ),
    switchMap(([orgUnitId, filterType]) =>
      this.orderService
        .getOrders(orgUnitId, filterType)
        .pipe(
          map(
            (res: any) => new fromDashboardActions.GetOrdersSuccess(res),
            catchError(error =>
              of(new fromDashboardActions.TotalOrdersFailde(error))
            )
          )
        )
    )
  );
}
