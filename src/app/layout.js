import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/shared/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Amr Food",
  description:
    "Amr Food is a platform where you can buy and sell food around your area. We will d everything for you to make easy  your food business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
