import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,

    price: Number,

    category: String

});

const ProductModel = model('product', productSchema);

export {ProductModel};