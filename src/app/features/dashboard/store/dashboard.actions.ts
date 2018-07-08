import { Action } from '@ngrx/store';
import { TotalOrder, Order } from '../../../core';

export const TOTAL_ORDERS = '[Dashboard] Total Orders';
export const TOTAL_ORDERS_SUCCESS = '[Dashboard] Total Orders Success';
export const TOTAL_ORDERS_FAILED = '[Dashboard] Total Orders Failed';

export const GET_ORDERS = '[Dashboard] Get Orders';
export const GET_ORDERS_SUCCESS = '[Dashboard] Get Orders Success';
export const GET_ORDERS_FAILED = '[Dashboard] Get Orders Failed';

export class TotalOrders implements Action {
  readonly type = TOTAL_ORDERS;
  constructor(public payload: Number) {}
}

export class TotalOrdersSuccess implements Action {
  readonly type = TOTAL_ORDERS_SUCCESS;
  constructor(public payload: TotalOrder[]) {}
}

export class TotalOrdersFailde implements Action {
  readonly type = TOTAL_ORDERS_FAILED;
  constructor(public payload: string) {}
}

export class GetOrders implements Action {
  readonly type = GET_ORDERS;
  constructor(public payload: number) {}
}

export class GetOrdersSuccess implements Action {
  readonly type = GET_ORDERS_SUCCESS;
  constructor(public payload: Order[]) {}
}
export class GetOrdersFailde implements Action {
  readonly type = GET_ORDERS_FAILED;
  constructor(public payload: string) {}
}
export type All =
  | TotalOrders
  | TotalOrdersSuccess
  | GetOrders
  | GetOrdersSuccess;
