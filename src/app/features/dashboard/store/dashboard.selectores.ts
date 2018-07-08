import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DashboardState, orderAdapter } from './dashboard.reducer';

export const getDashboardState = createFeatureSelector<DashboardState>(
  'dashboard'
);

export const getTotalOrdersStatus = createSelector(
  getDashboardState,
  (state: DashboardState) => state.totalOrders
);

export const { selectAll: selectAllOrders } = orderAdapter.getSelectors();

export const getAllOrders = createSelector(getDashboardState, selectAllOrders);
