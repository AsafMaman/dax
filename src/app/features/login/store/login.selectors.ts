import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

export const getLoginState = createFeatureSelector<LoginState>('login');
const _loginLoading = (state: LoginState) => state.loading;
const _loginIsLogedIn = (state: LoginState) => state.isLogedIn;
const _loginToken = (state: LoginState) => state.token;

export const getLoginLoading = createSelector(getLoginState, _loginLoading);
export const getLoginIsLogin = createSelector(getLoginState, _loginIsLogedIn);
export const getLoginToken = createSelector(getLoginState, _loginToken);
