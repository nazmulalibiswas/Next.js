export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main style={{ flex: 1 }}>
        {children}
      </main>

      <footer
        style={{
          backgroundColor: "lightblue",
          padding: "1rem",
        }}
      >
        <p>Footer</p>
      </footer>
    </>
  );
}