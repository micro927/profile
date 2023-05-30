import "./globals.css";
import { Poppins } from "next/font/google";

const poppin = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Micro | micro927 Github's Page",
  description: "Using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppin.className}>{children}</body>
    </html>
  );
}
