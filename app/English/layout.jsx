export const metadata = {
  title: "Hala Technology",
  description:
    "Hala Technology is an initiative that aims to provide technology services in the Kingdom of Saudi Arabia through a coalition of the best companies and experts in the field of technology from the Arab Republic of Egypt.",
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
    title: "Hala Technology",
    description:
      "Hala Technology is an initiative that aims to provide technology services in the Kingdom of Saudi Arabia through a coalition of the best companies and experts in the field of technology from the Arab Republic of Egypt.",
    url: "https://hala-technology.vercel.app",
    siteName: "Hala Technology",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "Campaign logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "",
    description:
      "Hala Technology is an initiative that aims to provide technology services in the Kingdom of Saudi Arabia through a coalition of the best companies and experts in the field of technology from the Arab Republic of Egypt.",
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

export default function EnglishLayout({ children }) {
  return <section>{children}</section>;
}
