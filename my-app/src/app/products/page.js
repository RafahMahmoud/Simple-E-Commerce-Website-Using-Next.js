import Link from 'next/link';
import { products } from '../data/products';

export const metadata = {
  title: 'Products | Simple E-commerce',
};

export default function Products() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <Link href={`/products/${product.id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}