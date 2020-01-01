import * as express from "express";
import * as bodyParser from "body-parser";
import registerRoutes from "./configuration/registerRoutes";
import * as mongoose from "mongoose";
import * as cors from "cors";
import { swaggerDocument } from "./api-doc";
import { notFoundErrorHandler, errorHandler } from "./middlewares/apiErrorHandler";
var swaggerUi = require('swagger-ui-express');

class App {

    public app = express();

    public mongoUrl: string = 'mongodb://localhost:27017/AusMallDB';

    private options: cors.CorsOptions = {
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
        credentials: false,
        methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        origin: 'http://localhost:4200',
        preflightContinue: false
    };

    constructor() {
        this.config();
        this.mongoSetup(); 
        registerRoutes(this.app);
        this.app.use(notFoundErrorHandler)
        this.app.use(errorHandler);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
        this.app.use(cors({ origin: 'http://localhost:4200' }));
        //this.app.options("*", cors(this.options));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    }
}

export default new App().app;
