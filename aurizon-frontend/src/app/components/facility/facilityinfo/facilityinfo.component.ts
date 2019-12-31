import { Component, OnInit } from '@angular/core';
import { ParentalfacilityService } from 'src/app/services/facility/parentalfacility.service';
import { ParentalFacilityDetails } from 'src/app/models/parentalFacilityDetails';
import { ActivatedRoute, Router } from '@angular/router';
import Logger from 'src/app/utils/logger';

@Component({
  selector: 'app-facilityinfo',
  templateUrl: './facilityinfo.component.html',
  styleUrls: ['./facilityinfo.component.scss']
})
export class FacilityinfoComponent implements OnInit {

  facilityInfoList: any;
  constructor(private router: Router, private route: ActivatedRoute, private parentalfacility: ParentalfacilityService) { }

  ngOnInit() {
    this.getfacilityInfo()
  }

  loadFacilityDetails() {
    this.router.navigate(['/facilities/parental']);
  }
  getfacilityInfo() {
    try {
      let reqParam = this.route.snapshot.paramMap.get('name');
      this.parentalfacility.getFacilityDetails(reqParam)
        .subscribe(
          res => {
            this.facilityInfoList = res.data;
          },
          error => {
            Logger.log(" Error", error)
          });
    } catch (error) {
      Logger.log(" Error", error)
    }
  }
  navigateReview(item) {
    this.router.navigate([`/facilities/parental/${this.route.snapshot.paramMap.get('name')}/review/${item.id}`]);
  }

}
