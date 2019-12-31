import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthComponent', () => { 
  let fixture: ComponentFixture<AuthComponent>;
  let comp: AuthComponent;;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [AuthService],
      imports: [
        BrowserModule,FormsModule,RouterTestingModule.withRoutes([]),HttpClientModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AuthComponent); 
        comp = fixture.componentInstance; 
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
      })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it(`should set onSignUp to true`, (async() => {
    comp.onSignUp();
    expect(comp.onSignUp).toBeTruthy();
  })); 

  it(`fileds should be invalid`, (async() => {
    comp.login.username.email = '';
    comp.login.password.password = '';
    expect(comp.hasValidDetails).toBeTruthy(false);
  }));

  it(`fileds should be valid`, (async() => {
    comp.login.username.email = 'test1@gmail.com';
    comp.login.password.password = 'test1';
    expect(comp.hasValidDetails).toBeTruthy();
  }));
});
