import "@/styles/global.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
