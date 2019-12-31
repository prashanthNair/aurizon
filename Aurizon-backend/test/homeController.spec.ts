import { HomeController } from '../src/controllers/homeController';
import { expect } from 'chai';
import * as sinon from "sinon";
import 'mocha';  
import { IHomeService } from '../src/services/IHomeService';
import { Home } from '../src/models/home';

let testData: Home[] = [{
  name: "Parental Facility",
  id: 1,
  created_date: null,
  isValid: true
}];


let mockHomeService: IHomeService = {
  findAllFacility(): Promise<Home[]> { return Promise.resolve(<Home[]>testData); },
  searchFacility(searchParams: String): Promise<Home[]> { return Promise.resolve(<Home[]>testData); },
};

describe('Home controller Should', () => {

  it('get all facilities', async () => {

    let res = {
      status(stat) { return this; },
      json(result) {
        expect(result.data).to.be.instanceof(Array); 
        expect(result.success).to.eql(true); 
      }
    };

    let findAllFacilitySpy = sinon.spy(mockHomeService, "findAllFacility");
    const homeController = HomeController.getInstance(mockHomeService);
    await homeController.getAllFacility(<any>{}, <any>res, <any>{}); 
    findAllFacilitySpy.restore();

  });

  it("search a facility", async function () {

    let req = { params: { name: "Parental Facility" } };
    let res = {
      status(stat) { return this; },
      json(result) {
        expect(result.data).to.be.instanceof(Array);
        expect(result.success).to.eql(true); 
      }
    };

    let findByIdSpy = sinon.spy(mockHomeService, "searchFacility");
    const homeController = HomeController.getInstance(mockHomeService);

    await homeController.search(<any>req, <any>res, <any>{}); 
    findByIdSpy.restore();
    
  }); 
})