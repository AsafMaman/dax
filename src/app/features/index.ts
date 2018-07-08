import * as fromLogin from './login';
import * as fromDashboard from './dashboard';

export * from './login';
export * from './dashboard';
export const features: any[] = [
  fromLogin.LoginModule,
  fromDashboard.DashboardModule,
];
