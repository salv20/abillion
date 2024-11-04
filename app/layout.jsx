import "@/styles/global.css";

export const metadata = {
  title: "abillion",
  description: "online food website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
