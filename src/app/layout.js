import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sweetz",
  description: "El lado mas oculto de nosotros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
  className={`${poppins.className} ${geistMono.variable} antialiased`}
>
  {children}
      </body>
    </html>
  );
}
