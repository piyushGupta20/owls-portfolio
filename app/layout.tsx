import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.com"),
  title: "Owls | Practical Software Studio | High-Performance Products",
  description: "Owls is a new-age software studio focused on building practical, high-performance products — web apps, mobile apps, and custom digital tools that actually solve problems instead of looking fancy for nothing.",
  keywords: ["web development", "mobile apps", "product engineering", "custom software", "MVP development"],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    title: "Owls | Practical Software Studio | High-Performance Products",
    description: "Owls is a new-age software studio focused on building practical, high-performance products — web apps, mobile apps, and custom digital tools that actually solve problems.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png", // Placeholder - replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Owls Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Owls | Practical Software Studio | High-Performance Products",
    description: "Owls is a new-age software studio focused on building practical, high-performance products — web apps, mobile apps, and custom digital tools that actually solve problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} font-sans antialiased`}
      >
         <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                  >
                    {children}
                  </ThemeProvider>
      </body>
    </html>
  );
}
