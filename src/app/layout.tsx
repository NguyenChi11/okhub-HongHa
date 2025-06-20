import Header from "./components/Header/Header";
import "./globals.css";
import localFont from "next/font/local";
import { Londrina_Solid } from "next/font/google";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

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

const angelBoos = localFont({
  src: "./fonts/Angel-Boos-Regular.otf",
  display: "swap",
  variable: "--font-angel-boos",
});

const Londrina = Londrina_Solid({
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"], // tuỳ chọn
  variable: "--font-londrina", // nếu muốn dùng CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${tripsSans.variable} ${Londrina.className} ${angelBoos.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
