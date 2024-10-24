import "@/styles/global.css";
import Nav from "@/components/nav";

export const metadata = {
  title: "abillion",
  description: "online food website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />

        {children}

        <footer>footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
