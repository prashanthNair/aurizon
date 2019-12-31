import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentalfacilityComponent } from './parentalfacility.component';
import { FacilitydetailComponent } from '../facilitydetail/facilitydetail.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ParentalfacilityComponent', () => {
  let component: ParentalfacilityComponent;
  let fixture: ComponentFixture<ParentalfacilityComponent>;

  beforeEach((async() => {
    TestBed.configureTestingModule({
      declarations: [ ParentalfacilityComponent,FacilitydetailComponent ],
      imports: [
        BrowserModule, RouterTestingModule.withRoutes([]), HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentalfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
