import {Application} from "express";
import {OrderController} from "../controller/order-controller";

export class OrderRoutes {
    public orderController: OrderController = new OrderController();

    public routes(app: Application): void {

        app.route('/orders')
            .get(this.orderController.getOrders)
            .post(this.orderController.addOrder);

        app.route('/orders/:orderId')
            .get(this.orderController.getOrderWithId)
            .put(this.orderController.updateOrder)
            .delete(this.orderController.deleteOrder)
    }
}