import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { CONFIG } from '../../../app.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    const apiUrl = `${CONFIG.apiRoot}/token`;
    const body = `domain=&grant_type=password&username=${username}&password=${password}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this.http.post(apiUrl, body, { headers: headers }).pipe(
      map((response: any) => ({
        username: username,
        name: response.UserName,
        token: response.access_token,
        culture: response.Culture,
        rootId: response.RootId,
        orgUnitId: response.OrgUnitId,
      })),
      catchError((error: any) => Observable.throw('error'))
    );
  }
}
