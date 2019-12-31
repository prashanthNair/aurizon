import { TestBed } from '@angular/core/testing'; 
import { HomeService } from './home.service';
import {  HttpClientModule } from '@angular/common/http';
import { APiResponse } from 'src/app/models/httpResponse'; 

describe('Service: Home', () => {
  let homeService: HomeService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [HomeService]
    }); 
    homeService = TestBed.get(HomeService);
  });

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });

  describe('get all facility',async () => {
    it('should return a collection of facility', () => {
      const apiResponse: APiResponse =
      {
        status: 1,
        message: 'success',
        data: [{name:'Parental Service', id: 1},{name:'Restuarnt', id: 1},{name:'Stores', id: 1} ]
      }

      let response;
     // spyOn(homeService, 'getAllFacility').and.returnValue(of(apiResponse));

       homeService.getAllFacility().subscribe(res => {
        response = res;
        expect(response.message).toEqual('success');
        expect(response.data[0]).toEqual(apiResponse.data[0]);
      }); 
    });
  });

});
