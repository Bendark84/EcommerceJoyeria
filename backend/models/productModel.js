import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    categoria: { type: String, required: true },
    img: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    Marca: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    Descripcion: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
