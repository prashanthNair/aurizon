import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { ParentalfacilityService } from 'src/app/services/facility/parentalfacility.service';
import Logger from 'src/app/utils/logger';

@Component({
  selector: 'app-facilitydetail',
  templateUrl: './facilitydetail.component.html',
  styleUrls: ['./facilitydetail.component.scss']
})
export class FacilitydetailComponent implements OnInit {

  showSearch: any = true;
  parentaFacilityList :any=[{name:'',id:''}];
  constructor(private router : Router, private parentalfacility: ParentalfacilityService) { }

  ngOnInit() {
    this.getfacilitydetails()
  }

  getfacilitydetails() {
    try {
      this.parentalfacility.getAllFacility()
        .subscribe(
          res => {
            this.parentaFacilityList = res.data;
          },
          error => {
            Logger.log(" Error", error)
          });
    } catch (error) {
      Logger.log(" Error", error)
    }
  }

  searchByName(ele){
    this.showSearch = ele.target.value > 0 ? false : true;
    this.parentaFacilityList=this.parentaFacilityList.filter(item=>{
      return item.name.includes(ele.target.value);
    });
  }
  
  navigateToHome() {
    this.router.navigate(['/facilities']);
  }
  getInfo(name){ 
    this.router.navigate([`/facilities/parental/${name}`]);
  }
}
