import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as cors from "cors";
import {ProductRoutes} from "./routes/product-routes";
import {OrderRoutes} from "./routes/order-routes";
import {CategoryRoutes} from "./routes/category-routes";
import * as path from "path";

class App {

    public app: express.Application;
    public productRoutes: ProductRoutes = new ProductRoutes();
    public orderRoutes: OrderRoutes = new OrderRoutes();
    public categoryRoutes: CategoryRoutes = new CategoryRoutes();
    public mongoUrl: string = 'mongodb://admin:admin123@ds253353.mlab.com:53353/shop-zpw';

    constructor() {
        this.app = express();
        this.productRoutes.routes(this.app);
        this.orderRoutes.routes(this.app);
        this.categoryRoutes.routes(this.app);
        this.config();
        this.mongoSetup();
    }

    private config(): void {
        const corsOptions = {
            origin: 'http://localhost:4200',
            optionsSuccessStatus: 200
        };

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(express.static('public'));
        this.app.use(cors(corsOptions));
        this.app.route('*').get((req, res) => {
            res.sendFile(path.resolve('public/index.html'));
        });
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;