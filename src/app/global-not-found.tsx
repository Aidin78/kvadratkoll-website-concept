import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Image from "next/image";
import { buttonStyles } from "@/components/ui/Button";
import { images } from "@/data/images";
import { homeHref, site } from "@/data/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Sidan hittades inte | ${site.name}`,
  robots: { index: false, follow: false },
};

/**
 * 404 for URLs without a valid locale (e.g. /foo). It renders outside the [lang] layout,
 * so the locale is unknown: Swedish first, with English below.
 */
export default function GlobalNotFound() {
  return (
    <html lang="sv" className={`${inter.variable} ${interTight.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <main className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-site px-5 py-20 sm:px-8 lg:px-10">
            <Image src={images.logo} alt={site.name} className="h-6 w-auto" sizes="220px" />
            <p className="label-mono mt-16 mb-4 text-accent">404</p>
            <h1 className="text-5xl leading-display font-medium tracking-tighter sm:text-7xl">Sidan hittades inte</h1>
            <p lang="en" className="mt-3 text-lg text-muted">
              Page not found
            </p>
            {/* Plain anchors: this page renders outside the app's router context. */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={homeHref("sv")} className={buttonStyles({ size: "lg" })}>
                Till startsidan
              </a>
              <a href={homeHref("en")} lang="en" className={buttonStyles({ variant: "secondary", size: "lg" })}>
                Go to homepage
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
