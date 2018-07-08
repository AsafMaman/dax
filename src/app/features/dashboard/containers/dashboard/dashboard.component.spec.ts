import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CardComponent } from '../../components/card/card.component';
import { DataTablesModule } from 'angular-datatables';
import {
  StoreModule,
  ReducerManager,
  Store,
  combineReducers,
} from '@ngrx/store';

// import { reducer, effects, DashboardState } from '../../store';
import * as fromStore from '../../store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: Store<fromStore.DashboardState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DataTablesModule,
        HttpClientModule,
        StoreModule.forRoot({
          ...fromStore.reducer,
          feature: combineReducers(fromStore.reducer),
        }),
        // EffectsModule.forFeature(fromStore.effects),
      ],
      declarations: [DashboardComponent, CardComponent],
    }).compileComponents();
  }));

  // store = TestBed.get(Store);
  // spyOn(store, 'dispatch').and.callThrough();

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
