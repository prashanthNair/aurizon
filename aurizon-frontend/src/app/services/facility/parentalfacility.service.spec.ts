import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APiResponse } from 'src/app/models/httpResponse';
import { of } from 'rxjs';
import { ParentalfacilityService } from './parentalfacility.service';

describe('Service: Home', () => {
  let parentalService: ParentalfacilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [ParentalfacilityService]
    });

    TestBed.get(HttpClient);
    TestBed.get(HttpTestingController);
    parentalService == TestBed.get(ParentalfacilityService);
  });

  TestBed.get(HttpClient);
  TestBed.get(HttpTestingController);
  it('should be created', () => {
    parentalService = TestBed.get(ParentalfacilityService);
    expect(parentalService).toBeTruthy();
  });

  describe('get All Facility', () => {
    it('should return a collection of facility', () => {
      const apiResponse: APiResponse =
      {
        status: 1,
        message: 'success',
        data: [{ name: 'Toilet', id: 1 }, { name: 'Baby Feeding', id: 1 }, { name: 'Shower', id: 1 }]
      }
      let response;
      spyOn(parentalService, 'getAllFacility').and.returnValue(of(apiResponse));

      parentalService.getAllFacility().subscribe(res => {
        response = res;
      });
      expect(response.status).toEqual(1);
      expect(response.data).toEqual(apiResponse.data[0]);
    });
  });

  describe('get Facility Details', () => {
    it('should return a collection of facility', () => {
      const req = 'Toilet'
      const apiResponse: APiResponse =
      {
        status: 1,
        message: 'success',
        data: { locationInfo: '1 Mins Walk', statusMessage: 'Open', otherFacilities: '', }
      }

      let response;
      spyOn(parentalService, 'getFacilityDetails').and.returnValue(of(apiResponse));

      parentalService.getFacilityDetails(req).subscribe(res => {
        response = res;
      });
      expect(response.status).toEqual(1);
      expect(response.data).toEqual(apiResponse.data[0]);
    });
  });

});
