import {Application} from "express";
import {ProductController} from "../controller/product-controller";

export class ProductRoutes {
    public productController: ProductController = new ProductController();

    public routes(app: Application): void {

        app.route('/products')
            .get(this.productController.getProducts)
            .post(this.productController.addProduct);

        app.route('/products/:productId')
            .get(this.productController.getProductWithId)
            .put(this.productController.updateProduct)
            .delete(this.productController.deleteProduct)
    }
}