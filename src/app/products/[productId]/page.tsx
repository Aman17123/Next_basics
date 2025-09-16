async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;

  return (
    <div>
      The product {productId}
    </div>
  );
}

export default ProductDetails;
