export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header
        style={{
          backgroundColor: "lightblue",
          padding: "1rem",
        }}
      >
        <p>Header</p>
      </header>

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <footer
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",
        }}
      >
        <p>Footer</p>
      </footer>
    </>
  );
}