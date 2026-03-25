import "./globals.css";

export const metadata = {
  title: "a billion",
  description: "online food store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
