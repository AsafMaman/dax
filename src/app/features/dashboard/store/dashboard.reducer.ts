import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { TotalOrder, Order } from '../../../core';
import * as fromDashboardActions from './dashboard.actions';

export interface DashboardState extends EntityState<Order> {
  totalOrders: TotalOrder[];
}

export const orderAdapter = createEntityAdapter<Order>({});

// export const initialState: DashboardState = {
//   totalOrders: null,
// };

export const initialState: DashboardState = orderAdapter.getInitialState({
  totalOrders: null,
});

export function reducer(
  state = initialState,
  action: fromDashboardActions.All
): DashboardState {
  switch (action.type) {
    case fromDashboardActions.TOTAL_ORDERS_SUCCESS: {
      const orderTypes = [
        { key: 'SuspendedOrdersNotInCheckPO', description: 'Failed Orders' },
        { key: 'SuspendedOrdersInCheckPO', description: 'Overdue Orders' },
        { key: 'CheckPO', description: 'Pending Orders' },
      ];

      const totalOrders = orderTypes.map(t => {
        const order = action.payload.find(o => o.key === t.key);
        return { key: t.description, value: order ? order.value : 0 };
      });

      return { ...state, totalOrders: totalOrders };
    }

    case fromDashboardActions.GET_ORDERS_SUCCESS:
      return orderAdapter.addAll(action.payload, state);
  }
  return state;
}
