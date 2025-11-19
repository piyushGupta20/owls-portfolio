import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://owls.studio"),
  title: {
    default: "Owls | Practical Software Studio",
    template: "%s | Owls",
  },
  description:
    "Owls is a new-age software studio focused on building practical, high-performance products — web apps, mobile apps, and custom digital tools that actually solve problems instead of looking fancy for nothing.",
  keywords: [
    "web development",
    "mobile apps",
    "product engineering",
    "custom software",
    "MVP development",
  ],
  icons: {
    icon: "/owls.svg",
  },

  authors: [{ name: "Owls Studio", url: "https://owls.studio" }],
  openGraph: {
    title: "Owls | Practical Software Studio",
    description:
      "Owls is a new-age software studio focused on building practical, high-performance products — web apps, mobile apps, and custom digital tools that actually solve problems.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/owls.svg",
        width: 512,
        height: 512,
        alt: "Owls Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Owls | Practical Software Studio",
    description:
      "High-performance web & mobile apps and custom tools that actually solve problems.",
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
      <body className={`${figtree.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
