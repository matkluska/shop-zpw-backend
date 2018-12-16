import * as mongoose from 'mongoose';
import {NextFunction, Request, Response} from 'express';
import {ProductSchema} from "../model/product";

const Product = mongoose.model('Product', ProductSchema);

export class ProductController {

    public addProduct(req: Request, res: Response, next: NextFunction) {
        let newProduct = new Product(req.body);
        newProduct.save((err, product) => {
            if (err) {
                next(err);
            }
            res.json(product);
        });
    }

    public getProducts(req: Request, res: Response, next: NextFunction) {
        Product.find({}, (err, products) => {
            if (err) {
                next(err);
            }
            res.json(products);
        });
    }

    public getProductWithId(req: Request, res: Response, next: NextFunction) {
        Product.findById(req.params.productId, (err, product) => {
            if (err) {
                next(err);
            }
            res.json(product);
        });
    }

    public updateProduct(req: Request, res: Response, next: NextFunction) {
        Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, (err, product) => {
            if (err) {
                next(err);
            }
            res.json(product);
        });
    }

    public deleteProduct(req: Request, res: Response, next: NextFunction) {
        Product.remove({_id: req.params.productId}, (err) => {
            if (err) {
                next(err);
            }
            res.json({message: 'Successfully deleted product!'});
        });
    }

}