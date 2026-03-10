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
    "ecoline logistics, epacket, vận chuyển quốc tế, gửi hàng đi mỹ, gửi hàng đi anh, gửi hàng đi úc, gửi hàng đi châu âu, logistics việt nam",
  icons: {
    icon: "/images/LOGO_ECOLINE_TACHNEN-01.png",
    apple: "/images/LOGO_ECOLINE_TACHNEN-01.png",
  },
  openGraph: {
    title: "Ecoline Logistics - Epacket & Vận Chuyển Chuyên Tuyến Toàn Cầu",
    description:
      "Dịch vụ vận chuyển Epacket và chuyên tuyến quốc tế uy tín. Bay thẳng từ Việt Nam đi US, UK, EU, AU.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
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
                  attributeFilter: ['bis_skin_checked', 'bis_register']
                });
                document.querySelectorAll('[bis_skin_checked],[bis_register]').forEach(function(el) {
                  el.removeAttribute('bis_skin_checked');
                  el.removeAttribute('bis_register');
                });
              })();
            `,
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
