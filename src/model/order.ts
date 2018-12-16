import {ProductSchema} from './product';

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OrderSchema = new Schema({
    email: {
        type: String,
        required: 'Enter an email'
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    city: {
        type: String
    },
    street: {
        type: String
    },
    postalCode: {
        type: String
    },
    totalValue: {
        type: Number
    },
    state: {
        type: String
    },
    shippingTime: {
        type: Date,
        default: Date.now
    },
    products: {
        type: [ProductSchema]
    }
});

OrderSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});