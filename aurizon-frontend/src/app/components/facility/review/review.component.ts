import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentalfacilityService } from 'src/app/services/facility/parentalfacility.service';
import { Review } from 'src/app/models/review';
import Logger from 'src/app/utils/logger';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private reviewSerview: ParentalfacilityService) { }
  hasShowReview: boolean = false;
  review: string = ''; 
  reviewList: any = [];

  ngOnInit() {
    this.getAllReview();
  }
  showReview() {
    this.hasShowReview = true;
  }

  getInfo(name) {
    this.router.navigate([`/facilities/parental/Toilet`]);
  }

  postReview() {
    try {
      let id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
      let name = this.route.snapshot.paramMap.get('name');
      let user: Review = { categoryId: id, name: JSON.parse(localStorage.getItem('user')).email, category: 'Toilet', rating: '4', description: this.review }
      this.reviewSerview.postReview(user, id, name)
        .subscribe(
          res => {
            if (res.data[0].insertId) {
              this.hasShowReview = false;
              this.getAllReview();
            }
          }, error => {
            Logger.log("Service Error", error)
          });
    }
    catch (error) {
      Logger.log(" Error", error)
    }
  }

  getAllReview() {
    try {

      let id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
      let name = this.route.snapshot.paramMap.get('name');
      this.reviewSerview.getAllReviews(id, name)
        .subscribe(
          res => {
            this.reviewList = res.data;
          },
          error => {
            Logger.log(" Error", error)
          });
    } catch (error) {
      Logger.log(" Error", error)
    }
  }

} 