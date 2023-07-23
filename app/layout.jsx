import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "هلا تكنولوجيا",
  description:
    "هلا تكنولوجيا هي مبادرة تستهدف تقديم خدمات التكنولوجيا في المملكة العربية السعودية من خلال تحالف من أفضل الشركات والخبرات في مجال التكنولوجيا من جمهورية مصر العربية",
  generator: "Next.js",
  applicationName: "Hala Technology",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Saudi campaign",
    "Landing page for Saudi and Egyptian companies",
    "Business opportunities in Saudi Arabia and Egypt",
    "Trade between Saudi Arabia and Egypt",
    "Investment in Saudi Arabia and Egypt",
    "Saudi Arabia economic development",
    "Egypt economic development",
    "Saudi Arabia tourism",
    "Egypt tourism",
    "Saudi Arabia business culture",
    "Egypt business culture",
    "Egypt",
    "Saudi Arabia",
    "مصر",
    "المملكة العربية السعودية",
    "السعودية",
    "فرص استثمارية فى السعودية",
    "فرص استثمارية فى مصر",
    "صفحة هبوط",
    "صفحة هبوط لشركات السعودية",
    "صفحة هبوط لشركات مصر",
  ],
  authors: [
    { name: "Seif Eldin Sameh", url: "https://seif-eldin-sameh.vercel.app/" },
  ],
  colorScheme: "light",
  creator: "Seif Eldin Sameh",
  publisher: "Golden Hornet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  image: "/logo.webp",
  canonical: "https://hala-technology.vercel.app",
  metadataBase: "https://hala-technology.vercel.app",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5fa" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1f29" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/icon-192x192.png" },
      { url: "/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icon-128x128.png", sizes: "128x128", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  openGraph: {
    title: "هلا تكنولوجيا",
    description:
      "هلا تكنولوجيا هي مبادرة تستهدف تقديم خدمات التكنولوجيا في المملكة العربية السعودية من خلال تحالف من أفضل الشركات والخبرات في مجال التكنولوجيا من جمهورية مصر العربية",
    url: "https://hala-technology.vercel.app",
    siteName: "هلا تكنولوجيا",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "Campaign logo",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    title: "هلا تكنولوجيا",
    description:
      "هلا تكنولوجيا هي مبادرة تستهدف تقديم خدمات التكنولوجيا في المملكة العربية السعودية من خلال تحالف من أفضل الشركات والخبرات في مجال التكنولوجيا من جمهورية مصر العربية",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "Campaign logo",
      },
      {
        url: "/egypt.webp",
        width: 1800,
        height: 1600,
        alt: "Egypt logo",
      },
      {
        url: "/saudi.webp",
        width: 1800,
        height: 1600,
        alt: "Saudi logo",
      },
    ],
    creator: "@GoldenHornet",
    url: "https://hala-technology.vercel.app",
    card: "/logo.webp",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="live chat"
          src="https://embed.tawk.to/64a5016094cf5d49dc619bb9/1h4i8qod1"
          defer
          rel="preload"
          as="script"
        ></Script>
        <Script
          id="shortcuts"
          src="/shortcuts.js"
          defer
          rel="preload"
          as="script"
        ></Script>
        <Script
          id="google analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-2EW5J17ZBP"
          async
          rel="preload"
          as="script"
        ></Script>
        <Script
          src="/analysis.js"
          id="analysis"
          defer
          rel="preload"
          as="script"
        ></Script>
        <Script
          id="disable click"
          src="/click.js"
          defer
          rel="preload"
          as="script"
        ></Script>
      </body>
    </html>
  );
}
