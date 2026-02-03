import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novus — Shaping Tomorrow",
  description: "Novus is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age through automation and software integrations.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MQHMKSEV57"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MQHMKSEV57');
            `,
          }}
        />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
