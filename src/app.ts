import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import {ProductRoutes} from "./routes/product-routes";
import {OrderRoutes} from "./routes/order-routes";

class App {

    public app: express.Application;
    public productRoutes: ProductRoutes = new ProductRoutes();
    public orderRoutes: OrderRoutes = new OrderRoutes();
    public mongoUrl: string = 'mongodb://admin:admin123@ds253353.mlab.com:53353/shop-zpw';

    constructor() {
        this.app = express();
        this.config();
        this.productRoutes.routes(this.app);
        this.orderRoutes.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;