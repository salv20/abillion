import "@/styles/global.css";
import { AuthProvider } from "../provider.js";
export const metadata = {
  title: "abillion",
  description: "online food website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
