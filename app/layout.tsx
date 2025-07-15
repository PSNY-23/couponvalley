import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { ReactQueryProvider } from '@/components/providers/react-query-provider'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Couponic - Find the Best Deals and Coupons",
  description: "Discover the best shopping deals, promo codes, and discount coupons from top brands worldwide.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <LanguageProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>

          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
