import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/header/header";
import Footer from "./layout/footer";
import NextAuthSessionProvider from "../app/provider/NextAuthSessionProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JBL Store Thailand",
  description:
    "Get the best sound for your entertainment needs with JBL speakers, headphones & audio systems. Check out our full range of products at JBL Thailand now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <div className="overlay"></div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
