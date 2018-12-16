import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {CategorySchema} from "../model/category";

const Category = mongoose.model('Category', CategorySchema);

export class CategoryController {

    public getCategories(req: Request, res: Response) {
        Category.find({}, (err, categories) => {
            if (err) {
                res.send(err);
            }
            res.json(categories);
        });
    }
}