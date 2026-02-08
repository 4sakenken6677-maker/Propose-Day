export const metadata = {
  title: "Propose Day 💖",
  description: "A cute propose day website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
