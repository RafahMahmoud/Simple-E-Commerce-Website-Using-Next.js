import Link from 'next/link';

export const metadata = {
  title: 'Home | Simple E-commerce',
};

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Simple E-commerce</h1>
      <p className="text-xl mb-8">Discover our amazing products!</p>
      <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Shop Now
      </Link>
    </div>
  );
}