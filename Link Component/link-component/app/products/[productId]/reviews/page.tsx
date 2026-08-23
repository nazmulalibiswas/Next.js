import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = params.productId;
  return {
    title: `Product ${id}`,
  };
};

export default async function ReviewsPage({ params }: Props) {
  const { productId } = params;

  const reviews = [
    { id: 1, author: "Alice", text: "Great product!" },
    { id: 2, author: "Bob", text: "Works as expected." },
  ];

  return (
    <>
      <Link href="/products">Back to list</Link>
      <h1>Details about product {productId}</h1>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>
            <strong>{r.author}:</strong> {r.text}
          </li>
        ))}
      </ul>
    </>
  );
}

