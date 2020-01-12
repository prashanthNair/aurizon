import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home/home.service';
import Logger from 'src/app/utils/logger';
import { Store } from '@ngrx/store';
import { ActionTypes } from 'src/app/Store/actionType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSearch: Boolean = true;
  faciliList: any = [];
  constructor(private store: Store<any>, private router: Router, private homeService: HomeService) {
    this.router = router;
  }

  ngOnInit() {
    this.store.select('home')
      .subscribe((state =>
        this.faciliList = state.payload
      ));
    // this.getfacilitydetails();
    this.store.dispatch({ type: ActionTypes.GET_ALL_SERVICES })
  }

  getfacilitydetails() {
    try {
      this.homeService.getAllFacility()
        .subscribe(
          res => {
            this.store.dispatch(
              { type: ActionTypes.GET_ALL_SERVICES, payload: res.data })
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
      this.store.select('home')
        .subscribe((state =>
          this.faciliList = state.payload
        ));
      return;
    }

    this.faciliList = this.faciliList.filter(item => {
      return item.name.toLowerCase().includes(ele.target.value.toLowerCase());
    });
  }

}
