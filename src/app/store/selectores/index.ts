import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoginState } from '../../features/login/store';

export const getLoginState = createFeatureSelector<LoginState>('login');

const _loginToken = (state: LoginState) => state.token;
const _rootId = (state: LoginState) => state.rootId;
const _orgUnitId = (state: LoginState) => state.orgUnitId;

export const getLoginToken = createSelector(getLoginState, _loginToken);
export const getRootId = createSelector(getLoginState, _rootId);
export const getOrgUnitId = createSelector(getLoginState, _orgUnitId);
