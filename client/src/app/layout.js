import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../redux/provider";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import RootConfig from "@/components/RootConfig";

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
            <RootConfig/>
            <Navbar />
          </header>
          <main className="mt-28">
          {children}
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
