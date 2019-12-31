import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityRoutingModule } from './facility-routing.module';
import { HomeComponent } from './home/home.component';
import { ParentalfacilityComponent } from './parentalfacility/parentalfacility.component';
import { FacilitydetailComponent } from './facilitydetail/facilitydetail.component';
import { FacilityinfoComponent } from './facilityinfo/facilityinfo.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, ParentalfacilityComponent, FacilitydetailComponent, FacilityinfoComponent, ReviewComponent],
  imports: [FormsModule,
    CommonModule,FacilityRoutingModule
  ],
  exports:[FacilitydetailComponent]
})
export class FacilityModule { }
