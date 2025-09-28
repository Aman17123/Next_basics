import Link from "next/link";

function ProductList() {

  const productId = 100;
   return (
    <div>
      <h1> Product List</h1>
      <h2>
        <Link href="/products/1"> Product 1 </Link>
      </h2>
      <h2>
        <Link href="/products/2" replace> Product 2 </Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}> Product {productId} </Link>
      </h2>
    </div>
  );
}

export default ProductList;
