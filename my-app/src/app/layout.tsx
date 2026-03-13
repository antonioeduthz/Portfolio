import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-inter'
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fira'
});

export const metadata: Metadata = {
  title: "Titulo Qualquer",
  description: "Meu portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
