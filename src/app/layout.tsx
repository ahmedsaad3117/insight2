"use client";

import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { usePathname } from 'next/navigation';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Reachware Studio",
//   description: "The ultimate studio for the Reachware integration platform",
//   icons: ["/favicon.ico"]
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    console.log(`Route changed to: ${pathname} and error = ${query.get('error')}`);
    if (pathname === '/api/auth/signin' && query.get('error') === 'OAuthCallback') {
      console.log('Redirecting to home page');
      
      window.location.href = process.env.NEXTAUTH_URL as string;
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
