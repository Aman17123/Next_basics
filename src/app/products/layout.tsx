export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container mx-auto p-6">
      {/* Product-specific header */}
      <header className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <p className="text-gray-600">Browse our latest collection</p>
      </header>
      <h1>PRoduct Details</h1>
      {/* Main product content */}
      <main>{children}</main>

      {/* Product-specific footer */}
      <footer className="mt-8 border-t pt-4 text-sm text-gray-500">
        <p>Showing the best deals just for you 🚀</p>
      </footer>
    </section>
  );
}
