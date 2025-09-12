import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Bali Explorer Tour - Discover Bali's Magic with Expert Guides",
    template: "%s | Bali Explorer Tour"
  },
  description: "Discover Bali's magic with Bali Explorer Tour. Expert-guided tours to Ubud, Mount Batur, Tanah Lot, Nusa Penida & more. Premium transport, luxury accommodations, 24/7 support. Book your unforgettable Bali adventure today!",
  keywords: [
    "Bali tours",
    "Bali travel",
    "Ubud tour",
    "Mount Batur sunrise",
    "Tanah Lot temple",
    "Nusa Penida island",
    "Bali cultural experience",
    "Indonesia travel",
    "Bali adventure tours",
    "Bali tour packages",
    "professional Bali guide",
    "Bali rice terraces",
    "Bali temples",
    "Bali photography tour"
  ],
  authors: [{ name: "Bali Explorer Tour" }],
  creator: "Bali Explorer Tour",
  publisher: "Bali Explorer Tour",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bali Explorer Tour - Discover Bali's Magic with Expert Guides",
    description: "Expert-guided tours to Bali's most stunning destinations. Ubud cultural tours, Mount Batur sunrise trek, Tanah Lot temple visits & more. Premium service guaranteed.",
    
    siteName: "Bali Explorer Tour",
    images: [
      {
        url: "/images/tanah_lot.png",
        width: 1200,
        height: 630,
        alt: "Tanah Lot Temple at sunset - Bali Explorer Tour",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Explorer Tour - Discover Bali's Magic",
    description: "Expert-guided tours to Bali's most stunning destinations. Book your unforgettable adventure today!",
    creator: "@baliexplorertour",
    images: ["/images/tanah_lot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
