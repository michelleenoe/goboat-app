"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Header from "@/app/components/basics/Header";
import Footer from "@/app/components/basics/Footer";
import { LanguageProvider, useLanguage } from "@/app/lib/context/language";
import { ThemeProvider } from "@/app/lib/context/ThemeContext";
import { LocationProvider } from "@/app/lib/context/LocationContext";
import { FooterVisibilityProvider } from "./lib/context/FooterVisibility";
import { useFooterVisibility } from "./lib/context/FooterVisibility";

function Content({ children }) {
  const { language } = useLanguage();
  const { isFooterVisible } = useFooterVisibility();

  return (
    <html lang={language}>
      <body className="flex flex-col min-h-screen bg-grey2 text-typoPrimary dark:bg-typoSecondary dark:text-grey1">
        <ThemeProvider>
          <div className="block 928px:hidden">
            <Header />
          </div>
          <main className="flex-grow pb-10" key={language}>
            <div className="block 928px:hidden">
              {children}
              <SpeedInsights />
              <Analytics />
            </div>
            <div className="hidden 928px:flex min-h-screen items-center justify-center">
              <h1 className="text-2xl font-bold">
                Denne side er kun tilgængelig på mobile enheder
              </h1>
            </div>
          </main>
          {isFooterVisible && (
            <div className="block 928px:hidden">
              <Footer />
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <LocationProvider>
          <FooterVisibilityProvider>
            <Content>{children}</Content>
          </FooterVisibilityProvider>
        </LocationProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
