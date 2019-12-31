import * as chai from 'chai';
import * as sinon from "sinon";
import 'mocha';  
import { IAuthService } from '../src/services/IAuthService';
import { User } from '../src/models/user';
import { AuthController } from '../src/controllers/authController';
import { expect } from 'chai';

let testData: User = { 
    password: '123',
    email: "test@gmail.com",
    created_date: null,
    isActive: true
};
let postData: User = { 
    password: '123',
    email: "test2@gmail.com",
    created_date: null,
    isActive: true
};

let mockAuthService: IAuthService = {
    login(email: String, password: String): Promise<User> { return Promise.resolve(<User>testData); },
    postUser(userData:User): Promise<User> { return Promise.resolve(<User>postData); },
};

describe('Auth controller Should', () => {

    it('login', async () => {
        let req = { body: { email: "test@gmail.com", password: '123', } }
        let res = {
            status() {
                return this;
            },
            json(result) { 
                chai.expect(result.success).to.eql(true);  
            }
        };

        let loginSpy = sinon.spy(mockAuthService, "login");
        const authController = AuthController.getInstance(mockAuthService);

        await authController.login(<any>req, <any>res, <any>{}); 
        console.log(loginSpy.firstCall.args[0]);
        expect(loginSpy.firstCall.args[0]).to.eql('test@gmail.com');
        loginSpy.restore();
 

    })

    it('Post User', async () => {
        let req = { body: { email: "test5@gmail.com", password: 'test2', } }
        let res = {
            status(stat) {
                return this;
            },
            json(result) { 
                chai.expect(result.success).to.eql(true); 
            }
        };

        let loginSpy = sinon.spy(mockAuthService, "postUser");
        const authController = AuthController.getInstance(mockAuthService);

        await authController.postUser(<any>req, <any>res, <any>{});  
        loginSpy.restore();
    })
});