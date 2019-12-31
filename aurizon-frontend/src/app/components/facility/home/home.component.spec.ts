import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { ParentalfacilityService } from 'src/app/services/facility/parentalfacility.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach((async() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [ParentalfacilityService],
      imports: [
        BrowserModule,  RouterTestingModule.withRoutes([]), HttpClientModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`get all facilities details`, async(() => {
    spyOn(component, 'getfacilitydetails');
    let response = component.getfacilitydetails();
    console.log("Home", component.faciliList[0])
    expect(component.faciliList[0].id).toEqual('1');
  }));

  it(`load Facility Details`, async(() => {
    spyOn(component, 'loadFacilityDetails');;
    el = fixture.debugElement.query(By.css('a')).nativeElement;
    el.click();
    expect(component.loadFacilityDetails).toHaveBeenCalled();
  }));

});
