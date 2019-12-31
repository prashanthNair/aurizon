import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewComponent } from './review.component';
import { FormsModule } from '@angular/forms';
import { ParentalfacilityService } from 'src/app/services/facility/parentalfacility.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewComponent],
      imports: [FormsModule, BrowserModule, RouterTestingModule.withRoutes([]), HttpClientModule],
      providers: [ParentalfacilityService, HttpClient,
        {
          provide: ActivatedRoute, HttpClient,
          useValue: {
            data: {
              snapshot: { params: { name: 'Toilet' } }
            }
          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
