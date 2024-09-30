import { notFound } from 'next/navigation';
import { products } from '../../data/products';

export function generateMetadata({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  return {
    title: product ? `${product.name} | Simple E-commerce` : 'Product Not Found',
  };
}

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <p className="mb-6">{product.description}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}