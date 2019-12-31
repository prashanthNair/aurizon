import { ParentalController } from '../src/controllers/parentalFacilityController';
import { expect } from 'chai';
import * as sinon from "sinon";
import 'mocha';
import { IParentalFacilityService } from '../src/services/IParentalFacilityService';
import { ParentalFacilityDetails } from '../src/models/parentalFacilityDetails';
import { ParentalFacility } from '../src/models/parentalFacility';
import { Review } from '../src/models/review';

let detailsTestData: ParentalFacilityDetails[] = [{
  locationInfo: '2 min walk',
  statusMessage: "Open",
  otherFacilities: ['Shower'],
  occupancyInfo: "One out of tow",
  isEnabled: true
}];

let facilityTestData: ParentalFacility[] = [{
  name: "Toilet",
  id: 1,
  created_date: null,
  isEnable: true
}]

let reviewTestData: Review[] = [{
  name: "UserOne",
  id: 1,
  rating: "5",
  description: 'Clean and good',
  category: 'Toilet',
  categoryId: 1,
  created_date: null,
  isValid: false

}];

let parentalFacilityService: IParentalFacilityService = {
  findAllFacility(): Promise<ParentalFacility[]> { return Promise.resolve(<ParentalFacility[]>facilityTestData); },
  findFacilityDetails(selectionData: String): Promise<ParentalFacilityDetails[]> { return Promise.resolve(<ParentalFacilityDetails[]>detailsTestData); },
  findAllReviews(): Promise<Review[]> { return Promise.resolve(<Review[]>reviewTestData); },
  postReview(reviewObj: Review): Promise<Review> { return Promise.resolve(<Review>reviewTestData[0]); },
};

describe('Parental Facility controller Should', () => {

  it('get all facilities', async () => {
    let res = {
      status(stat) { return this; },
      json(result) {
        expect(result.data).to.be.instanceof(Array);
        expect(result.success).to.eql(true);
      }
    };

    let findAllFacilitySpy = sinon.spy(parentalFacilityService, "findAllFacility");
    const parentalController = ParentalController.getInstance(parentalFacilityService);
    await parentalController.getAllParentalFacility(<any>{}, <any>res, <any>{});
    findAllFacilitySpy.restore();
  });


  it("get selected facility Details", async function () {
    let req = { params: { facilityName: "Toilet" } };
    let res = {
      status(stat) { return this; },
      json(result) {
        expect(result.data).to.be.instanceof(Array);
        expect(result.success).to.eql(true);
      }
    };

    let findByIdSpy = sinon.spy(parentalFacilityService, "findFacilityDetails");
    const parentalController = ParentalController.getInstance(parentalFacilityService);

    await parentalController.getFacilityDetails(<any>req, <any>res, <any>{});

    expect(findByIdSpy.firstCall.args[0]).to.eql("Toilet");
    findByIdSpy.restore();
  });

  it("get all Review", async function () {

    let req = { params: { id: 1 } };
    let res = {
      status(stat) { return this; },
      json(result) {
        expect(result.data).to.be.instanceof(Array);
        expect(result.success).to.eql(true);
      }
    };

    let findByIdSpy = sinon.spy(parentalFacilityService, "findAllReviews");
    const parentalController = ParentalController.getInstance(parentalFacilityService);

    await parentalController.findAllReviews(<any>req, <any>res, <any>{});
    findByIdSpy.restore();
  });


  it("post a review", async function () {

    let req = { body: reviewTestData[0] };
    let res = {
      status(stat) { return this; },
      json(result) {
        expect(result.success).to.eql(true);
      }
    };

    let saveSpy = sinon.spy(parentalFacilityService, "postReview");
    const parentalController = ParentalController.getInstance(parentalFacilityService);

    await parentalController.createReview(<any>req, <any>res, <any>{});
    expect(saveSpy.firstCall.args[0].name).to.eql("UserOne");
    saveSpy.restore();
  });

});