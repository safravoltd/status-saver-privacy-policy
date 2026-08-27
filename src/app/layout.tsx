import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Status Saver Privacy Policy",
  description:
    "Privacy Policy for Status Saver, the WhatsApp status saving app by Safravo Ltd.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
