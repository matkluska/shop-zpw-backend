import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {OrderSchema} from "../model/order";

const Order = mongoose.model('Order', OrderSchema);

export class OrderController {

    public addOrder(req: Request, res: Response) {
        let newOrder = new Order(req.body);

        newOrder.save((err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }

    public getOrders(req: Request, res: Response) {
        Order.find({}, (err, orders) => {
            if (err) {
                res.send(err);
            }
            res.json(orders);
        });
    }

    public getOrderWithId(req: Request, res: Response) {
        Order.findById(req.params.orderId, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }

    public updateOrder(req: Request, res: Response) {
        Order.findOneAndUpdate({_id: req.params.orderId}, req.body, {new: true}, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }

    public deleteOrder(req: Request, res: Response) {
        Order.remove({_id: req.params.orderId}, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted order!'});
        });
    }

}