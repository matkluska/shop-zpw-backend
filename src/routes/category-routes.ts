import {Application} from "express";
import {CategoryController} from "../controller/category-controller";

export class CategoryRoutes {
    public categoryController: CategoryController = new CategoryController();

    public routes(app: Application): void {
        app.route('/api/categories')
            .get(this.categoryController.getCategories);
    }
}