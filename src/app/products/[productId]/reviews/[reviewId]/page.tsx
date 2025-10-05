import { redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading review");
  }

  const { productId, reviewId } = params;

  if (parseInt(reviewId) > 1000) {
    redirect("/products");
  }

  return (
    <div>
      Product: {productId}, Review: {reviewId}
    </div>
  );
}
