import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {ProductSchema} from "../model/product";

const Product = mongoose.model('Product', ProductSchema);

export class ProductController {

    public addProduct(req: Request, res: Response) {
        let newProduct = new Product(req.body);

        newProduct.save((err, product) => {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    }

    public getProducts(req: Request, res: Response) {
        Product.find({}, (err, products) => {
            if (err) {
                res.send(err);
            }
            res.json(products);
        });
    }

    public getProductWithId(req: Request, res: Response) {
        Product.findById(req.params.productId, (err, product) => {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    }

    public updateProduct(req: Request, res: Response) {
        Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, (err, product) => {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    }

    public deleteProduct(req: Request, res: Response) {
        Product.remove({_id: req.params.productId}, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted product!'});
        });
    }

}