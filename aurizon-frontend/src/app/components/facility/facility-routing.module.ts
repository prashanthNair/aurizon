import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentalfacilityComponent } from './parentalfacility/parentalfacility.component';
import { FacilitydetailComponent } from './facilitydetail/facilitydetail.component';
import { FacilityinfoComponent } from './facilityinfo/facilityinfo.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'parental', component: ParentalfacilityComponent },
  { path: 'parental/:name', component: FacilityinfoComponent },
  { path: 'parental/:name/review/:id', component: ReviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
