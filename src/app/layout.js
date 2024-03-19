import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lea",
  description: "Lea Baldevieso Portfolio",
  icon: {
    icon: "/home.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/home.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
