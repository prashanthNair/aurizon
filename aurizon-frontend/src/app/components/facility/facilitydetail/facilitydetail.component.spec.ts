import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitydetailComponent } from './facilitydetail.component';
import { RouterModule, Router } from '@angular/router';
import { BrowserModule, By } from '@angular/platform-browser';
import { ParentalfacilityService } from 'src/app/services/facility/parentalfacility.service';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientModule } from '@angular/common/http';
describe('FacilitydetailComponent', () => {
  let component: FacilitydetailComponent;
  let fixture: ComponentFixture<FacilitydetailComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach((async() => {
    TestBed.configureTestingModule({
      declarations: [FacilitydetailComponent],
      providers: [ParentalfacilityService],
      imports: [
        BrowserModule, RouterTestingModule.withRoutes([]), HttpClientModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(FacilitydetailComponent);
      component = fixture.componentInstance;  
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`get all facilities details`, async(() => {
    spyOn(component, 'getfacilitydetails');
    let response = component.getfacilitydetails();
    console.log(component.parentaFacilityList[0]);
    expect(component.parentaFacilityList[0].id).toEqual('');
  }));
 
});
