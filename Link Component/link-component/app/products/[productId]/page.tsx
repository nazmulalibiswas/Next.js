type Props = {
  // params ekhon ekta Promise hobe
  params: Promise<{ productId: string }>; 
};

// Component-tike async korte hobe
export default async function ProductPage({ params }: Props) {
  // data anar jonno await bebohar korte hobe
  const { productId } = await params; 

  return (
    <>
      <h1>Details about product {productId}</h1>
    </>
  );
}
