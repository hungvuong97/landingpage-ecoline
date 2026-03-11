import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ecoline Logistics - Epacket & Vận Chuyển Chuyên Tuyến Toàn Cầu",
  description:
    "Dịch vụ vận chuyển Epacket và chuyên tuyến quốc tế uy tín. Bay thẳng từ Việt Nam đi US, UK, EU, AU. Thời gian 5-7 ngày. Tracking riêng lẻ, hỗ trợ 24/24.",
  keywords:
    "ecoline logistics, ecolinelog, ecoline log, epacket, vận chuyển quốc tế, gửi hàng đi mỹ, gửi hàng đi anh, gửi hàng đi úc, gửi hàng đi châu âu, logistics việt nam, chuyển phát nhanh quốc tế, epacket việt nam",
  metadataBase: new URL('https://ecolinelog.vn'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/images/LOGO_ECOLINE_TACHNEN-01.png",
    apple: "/images/LOGO_ECOLINE_TACHNEN-01.png",
  },
  openGraph: {
    title: "Ecoline Logistics - Epacket & Vận Chuyển Chuyên Tuyến Toàn Cầu",
    description:
      "Dịch vụ vận chuyển Epacket và chuyên tuyến quốc tế uy tín. Bay thẳng từ Việt Nam đi US, UK, EU, AU.",
    url: 'https://ecolinelog.vn',
    siteName: 'Ecoline Logistics',
    locale: 'vi_VN',
    type: "website",
    images: [
      {
        url: '/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Ecoline Logistics - Vận chuyển quốc tế',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecoline Logistics - Epacket & Vận Chuyển Chuyên Tuyến Toàn Cầu',
    description: 'Dịch vụ vận chuyển Epacket và chuyên tuyến quốc tế uy tín. Bay thẳng từ Việt Nam đi US, UK, EU, AU.',
    images: ['/images/banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(m) {
                    if (m.type === 'attributes') {
                      m.target.removeAttribute(m.attributeName);
                    }
                  });
                });
                observer.observe(document.documentElement, {
                  attributes: true,
                  subtree: true,
                  attributeFilter: ['bis_skin_checked', 'bis_register', 'bis_use', 'data-bis-config', 'data-dynamic-id']
                });
                document.querySelectorAll('[bis_skin_checked],[bis_register],[bis_use],[data-bis-config],[data-dynamic-id]').forEach(function(el) {
                  el.removeAttribute('bis_skin_checked');
                  el.removeAttribute('bis_register');
                  el.removeAttribute('bis_use');
                  el.removeAttribute('data-bis-config');
                  el.removeAttribute('data-dynamic-id');
                });
              })();
            `,
          }}
        />
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ecoline Logistics',
              url: 'https://ecolinelog.vn',
              logo: 'https://ecolinelog.vn/images/LOGO_ECOLINE_TACHNEN-01.png',
              description: 'Dịch vụ vận chuyển Epacket và chuyên tuyến quốc tế uy tín. Bay thẳng từ Việt Nam đi US, UK, EU, AU. Thời gian 5-7 ngày.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'VN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+84-355-350-886',
                contactType: 'customer service',
                availableLanguage: 'Vietnamese',
              },
              sameAs: [
                'https://www.facebook.com/ecolinelogistichn',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
