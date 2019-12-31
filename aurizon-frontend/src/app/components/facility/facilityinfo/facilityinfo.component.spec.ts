import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityinfoComponent } from './facilityinfo.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { ParentalfacilityService } from 'src/app/services/facility/parentalfacility.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('FacilityinfoComponent', () => {
  let component: FacilityinfoComponent;
  let fixture: ComponentFixture<FacilityinfoComponent>;
  let el: HTMLElement;

  beforeEach((async () => {
    TestBed.configureTestingModule({
      declarations: [FacilityinfoComponent],
      providers: [ParentalfacilityService, HttpClient,
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              snapshot: { params: { name: 'name' } }
            }
          }
        }],
      imports: [
        BrowserModule, RouterTestingModule.withRoutes([]),HttpClientModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(FacilityinfoComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('get info', (async() => {
    spyOn(component, 'getfacilityInfo');
    await component.getfacilityInfo();
     console.log(component.facilityInfoList);
    expect(component.facilityInfoList[0].id).toEqual(1);
  }));

});
