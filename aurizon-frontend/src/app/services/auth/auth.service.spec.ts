import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { APiResponse } from 'src/app/models/httpResponse';

describe('AuthService', () => {

  let authService: AuthService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    });

    // TestBed.get(HttpClient);
    // TestBed.get(HttpTestingController);
    authService == TestBed.get(AuthService);
  });

  TestBed.get(HttpClient);
  TestBed.get(HttpTestingController);
  it('should be created', async () => {
    authService = TestBed.get(AuthService);
    expect(authService).toBeTruthy();
  });

  //tests for login() method
  describe('login', async () => {
    it('should return user details', () => {
      const req = { email: 'test1@gmail.com', password: 'test' }
      const apiResponse: APiResponse =
      {
        status: 1,
        message: 'success',
        data: { email: 'test@gmail.comS' }
      }

      let response; 
      spyOn(authService, 'login').and.returnValue(of(apiResponse));

      authService.login(req).subscribe(res => {
        response = res;
        expect(response.status).toEqual(1);
        expect(response.data).toEqual(apiResponse.data);
      });
    });
  });

  //tests for Create User() method
  describe('createUser', async () => {
    it('should return user details', () => {
      const req = { email: 'test@gmail.com', password: '123' }
      const apiResponse: APiResponse =
      {
        status: 1,
        message: 'success',
        data: { email: 'test@gmail.comS' }
      }

      let response;
      spyOn(authService, 'createUser').and.returnValue(of(apiResponse));

      authService.createUser(req).subscribe(res => {
        response = res;
        expect(response.status).toEqual(1);
        expect(response.data).toEqual(apiResponse.data);
      });
    });
  });

});

