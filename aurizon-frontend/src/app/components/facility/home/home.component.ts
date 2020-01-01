import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home/home.service';
import Logger from 'src/app/utils/logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSearch: Boolean = true;
  faciliListClone: any = [];
  faciliList: any = [];
  constructor(private router: Router, private homeService: HomeService) {
    this.router = router;
  }

  ngOnInit() {
    this.getfacilitydetails()
  }

  getfacilitydetails() {
    try {
      this.homeService.getAllFacility()
        .subscribe(
          res => {
            this.faciliList = res.data;
            this.faciliListClone = { ... this.faciliList };
          },
          error => {
            Logger.log(" Error", error)
          });
    } catch (error) {
      Logger.log(" Error", error)
    }
  }

  loadFacilityDetails() {
    this.router.navigate(['/facilities/parental']);
  }

  searchByName(ele) { 

    this.showSearch = ele.target.value.length > 0 ? false : true;
    if (ele.target.value.length == 0) {
      this.faciliList = {...this.faciliListClone}
      return;
    }

    this.faciliList = this.faciliList.filter(item => {
      return item.name.toLowerCase().includes(ele.target.value.toLowerCase());
    });
  }

}
