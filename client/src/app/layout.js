import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../redux/provider";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DescuentosYa!",
  description: "Developer by CebrasDevs",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
