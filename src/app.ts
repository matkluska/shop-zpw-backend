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
            origin: '*',
            optionsSuccessStatus: 200
        };

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(express.static('public'));
        this.app.use(cors(corsOptions));
        this.app.route('*').get((req, res) => {
            res.sendFile(path.resolve('public/index.html'));
        });
        this.app.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.header('Access-Control-Allow-Origin', '*');

            // Request methods you wish to allow
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers you wish to allow
            res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.header('Access-Control-Allow-Credentials', 'false');

            // Pass to next layer of middleware
            next();
        });
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;