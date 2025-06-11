import Header from "./components/Header/Header";
import "./globals.css";
import localFont from "next/font/local";

const tripsSans = localFont({
  src: [
    {
      path: "./fonts/trip-sans-ultra.otf",
      weight: "900",
      style: "normal",
    },
    // Thêm các biến thể khác
  ],
  variable: "--font-trips-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tripsSans.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
