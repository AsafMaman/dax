import { Injectable } from '@angular/core';
import { CONFIG } from '../../../app.config';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TotalOrder, Order } from '../../../core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  getTotalOrders(orgUnitId): Observable<TotalOrder> {
    const apiUrl = `${CONFIG.apiRoot}/_api/POMonitor/totalOrders/${orgUnitId}`;
    return this.http.get(apiUrl).pipe(
      map((response: any) =>
        response.map(r => ({ key: r.Key, value: r.Value }))
      ),
      catchError((error: any) => Observable.throw(error))
    );
  }
  getOrders(orgUnitId, type): Observable<Order[]> {
    const apiUrl = `${
      CONFIG.apiRoot
    }/_api/POMonitor/Orders?filter={"OrgIds":[${orgUnitId}],"Agreement":"","Time":1,"AdditionalFiler":${type},"MaxRowsNumber":100}`;
    return this.http.get(apiUrl).pipe(
      map((response: any) =>
        response.orders.map(order => ({
          id: order.POId,
          orderId: order.POId,
          storeName: order.StoreName,
          agreement: order.Agreement,
          arrivalDate: order.ArrivalDate,
          stepName: order.StepName,
          stepDueTime: order.StepDueTime,
          stepStatus: order.StepStatus,
          dataSource: order.DataSource,
          info: order.Info,
          orderType: order.OrderType,
          reviewedItems: order.ReviewedData.FormattedData,
        }))
      ),
      catchError((error: any) => throwError(error))
    );
  }
}
