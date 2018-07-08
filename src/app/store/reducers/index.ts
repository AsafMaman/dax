// Custom Router State Serializer.
import {
  RouterReducerState,
  routerReducer,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params,
  RouterState,
} from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export const getRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}
