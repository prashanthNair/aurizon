import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentalfacilityService } from 'src/app/services/facility/parentalfacility.service';
import Logger from 'src/app/utils/logger';
import { Store } from '@ngrx/store';
import { ActionTypes } from 'src/app/Store/actionType';

@Component({
  selector: 'app-facilitydetail',
  templateUrl: './facilitydetail.component.html',
  styleUrls: ['./facilitydetail.component.scss']
})
export class FacilitydetailComponent implements OnInit {

  showSearch: any = true;
  parentaFacilityList: any = [{ name: '', id: '' }]; 
  constructor(private store: Store<any>, private router: Router, private parentalfacility: ParentalfacilityService) { }

  ngOnInit() {
    this.getfacilitydetails()
    this.store.select('home')
      .subscribe((state =>
        this.parentaFacilityList = state.facilities
      ));
  }

  getfacilitydetails() {
    try {
      this.parentalfacility.getAllFacility()
        .subscribe(
          res => {
            this.store.dispatch(
              { type: ActionTypes.GET_ALL_FACILITIES, payload: res.data }) 
          },
          error => {
            Logger.log(" Error", error)
          });
    } catch (error) {
      Logger.log(" Error", error)
    }
  }

  searchByName(ele) {
    this.showSearch = ele.target.value > 0 ? false : true;
    this.parentaFacilityList = this.parentaFacilityList.filter(item => {
      return item.name.includes(ele.target.value);
    });
  }

  navigateToHome() {
    this.router.navigate(['/facilities']);
  }
  getInfo(name) {
    this.router.navigate([`/facilities/parental/${name}`]);
  }
}
