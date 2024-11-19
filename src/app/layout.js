import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "canvas",
  description: "canvas,gSAP,scrollTrigger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
