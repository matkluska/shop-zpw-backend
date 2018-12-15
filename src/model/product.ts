import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    _id: {
        type: String,
        required: 'Enter an id'
    },
    name: {
        type: String,
        required: 'Enter a name'
    },
    products_quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    photo_url: {
        type: String
    },
    category: {
        type: String
    },
    is_ready: {
        type: Boolean
    }
});

