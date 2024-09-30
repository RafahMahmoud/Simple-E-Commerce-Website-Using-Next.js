import Image from 'next/image';

export const metadata = {
  title: 'About Us | Simple E-commerce',
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="mb-8 relative w-full h-[400px]">
        <Image
          src="/about-image.jpg"
          alt="About Us"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <p className="text-lg mb-4">
      Welcome to Simple E-commerce, your one-stop destination for all your needs. We pride ourselves on providing high quality products at competitive prices.      </p>
      <p className="text-lg mb-4">
      Our mission is to provide an exceptional shopping experience to our customers, with a wide range of products and excellent customer service.

</p>
      <p className="text-lg">
      Thank you for choosing Simple E-commerce. Looking forward to serving you!

</p>
    </div>
  );
}