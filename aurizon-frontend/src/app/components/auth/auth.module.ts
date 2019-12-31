import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth.component'; 
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent],
  imports: [ FormsModule,CommonModule
  ],
  exports:[AuthComponent],
  providers: [ HttpClient ]
})
export class AuthModule { }
