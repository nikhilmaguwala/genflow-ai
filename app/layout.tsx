import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import {ModalProvider} from "@/components/modal-provider";
import {ToasterProvider} from "@/components/toaster-provider";
import {CrispProvider} from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GenFlow AI",
  description: "AI Platform for the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
            <CrispProvider />
          <body className={inter.className}>
            <ModalProvider />
            <ToasterProvider />
            {children}
          </body>
        </html>
      </ClerkProvider>
  );
}
