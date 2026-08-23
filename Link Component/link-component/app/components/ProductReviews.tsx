"use client";
import React from "react";
import Link from "next/link";

type Props = {
  productId: string | number;
};

export default function ProductReviews({ productId }: Props) {
  const reviews = [
    { id: 1, author: "Alice", text: "Great product!" },
    { id: 2, author: "Bob", text: "Works as expected." },
    { id: 3, author: "Carol", text: "Worth the price." },
  ];

  return (
    <section>
      <h2>Reviews for product {productId}</h2>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>
            <strong>{r.author}:</strong> {r.text}
          </li>
        ))}
      </ul>
      <p>
        <Link href={`/products/${productId}/reviews`}>Open full reviews page</Link>
      </p>
    </section>
  );
}
