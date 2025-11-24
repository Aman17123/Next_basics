import { redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // Throw error randomly to test error boundary
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error Loading review");
  }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId, 10) > 1000) {
    redirect("/products");
  }

  return (
    <div>
      Product: {productId}, Review: {reviewId}
    </div>
  );
}
