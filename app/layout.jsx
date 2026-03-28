import "./globals.css";

export const metadata = {
  title: {
    default: "Abillion | Fresh Raw & Unprocessed Foods in Enugu",
    template: "%s | Abillion",
  },
  description:
    "Order fresh, farm-direct raw foods in Enugu. From jumbo snails and goats to fresh vegetables and spices, we deliver organic, unprocessed food to your door.",
  keywords: [
    "Raw food Enugu",
    "Abillion food store",
    "Online market Enugu",
    "Fresh snail delivery",
    "Organic farm produce Nigeria",
    "New-market Enugu food",
  ],
  authors: [{ name: "Abillion Food Co." }],
  creator: "Abillion",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://abillion.vercel.app",
    title: "Abillion | Fresh Raw & Unprocessed Foods in Enugu",
    description:
      "The most trusted source for organic, raw, and unprocessed food items directly from New-market, Enugu.",
    siteName: "Abillion",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Abillion Raw Foods Market",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abillion | Fresh Raw & Unprocessed Foods",
    description: "Farm-fresh raw foods delivered across Enugu.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
