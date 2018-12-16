import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CategorySchema = new Schema({
    id: {
        type: String
    },
    label: {
        type: String,
        required: 'Enter a label'
    }
});

CategorySchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

