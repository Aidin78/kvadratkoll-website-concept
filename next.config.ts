import type { NextConfig } from "next";
import { defaultLocale } from "./src/i18n/config";

const nextConfig: NextConfig = {
  experimental: {
    // The root layout sits under [lang], so URLs without a valid locale need a global 404.
    globalNotFound: true,
  },
  async redirects() {
    // Swedish is the primary audience, so the root always opens the Swedish site.
    return [{ source: "/", destination: `/${defaultLocale}`, permanent: false }];
  },
};

export default nextConfig;
