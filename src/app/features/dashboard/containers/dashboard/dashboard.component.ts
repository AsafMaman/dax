import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Observable, Subscription } from 'rxjs';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { TotalOrder, Order } from '../../../../core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  bgColors: string[];
  // totalOrdersSubscription: Subscription;
  totalOrders$: Observable<TotalOrder[]>;
  cards: { bgColor: string; body: string; footer: string }[];
  dtOptions: DataTables.Settings = {};
  orders$: Observable<Order[]>;

  constructor(private store: Store<fromStore.DashboardState>) {
    this.bgColors = ['bg-danger', 'bg-warning', 'bg-success'];
  }

  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;

  ngOnInit() {
    this.store.dispatch(new fromStore.TotalOrders(10000001));
    this.store.dispatch(new fromStore.GetOrders(5));
    this.totalOrders$ = this.store.select(fromStore.getTotalOrdersStatus);
    this.orders$ = this.store.select(fromStore.getAllOrders);

    this.dtOptions = this.tableOptions();
  }

  ngAfterViewInit() {
    this.orders$.subscribe(orders => {
      console.log(orders);
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.clear();
        dtInstance.rows.add(orders);
        dtInstance.draw();
      });
    });
  }

  ngOnDestroy() {
    // this.totalOrdersSubscription.unsubscribe();
  }

  btnClick() {
    this.orders$.subscribe(orders => {
      console.log(orders);
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.clear();
        dtInstance.rows.add(orders);
        dtInstance.draw();
      });
    });
  }
  footerClick(e) {
    console.log(`footerClick: ${e.body}`);
  }

  tableOptions() {
    return {
      columns: [
        {
          title: 'Order ID',
          data: 'orderId',
        },
        {
          title: 'Store Name',
          data: 'storeName',
        },
        {
          title: 'Agreement',
          data: 'agreement',
        },
        {
          title: 'Arrival Date',
          data: 'arrivalDate',
        },
        {
          title: 'Step Name',
          data: 'stepName',
        },
        {
          title: 'Step Due Time',
          data: 'stepDueTime',
        },
        {
          title: 'Step Status',
          data: 'stepStatus',
        },
        {
          title: 'Data Sourec',
          data: 'dataSource',
        },
        {
          title: 'Info',
          data: 'info',
        },
        {
          title: 'OrderType',
          data: 'orderType',
        },
        {
          title: 'Reviewed Items',
          data: 'reviewedItems',
        },
      ],
      data: [],
    };
  }
}
