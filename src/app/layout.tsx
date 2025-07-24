import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/header/Navigation";
import SplashCursor from "@/components/utils/SplashCursor";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "BangLee – Fullstack Web Developer",
    description: "BangLee – Lập trình viên fullstack chuyên Next.js, React, NestJS và Java Spring. Xây dựng giải pháp web tối ưu, hiệu suất cao và bảo mật.",
    openGraph: {
      title: "BangLee – Fullstack Web Developer",
      description: "BangLee – Lập trình viên fullstack chuyên Next.js, React, NestJS và Java Spring. Xây dựng giải pháp web tối ưu, hiệu suất cao và bảo mật.",
      images: [
        {
          url: 'https://wuubang-access.s3.ap-southeast-1.amazonaws.com/thum_port_wu.jpg',
          width: 1220,
          height: 633,
          alt: 'BangLee – Fullstack Developer'
        }
      ],
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@levubang_dev',
      title: 'BangLee – Fullstack Web Developer',
      description: "Chuyên xây dựng hệ thống web chất lượng cao với Next.js, NestJS và Java Spring.",
      images: ['https://wuubang-access.s3.ap-southeast-1.amazonaws.com/thum_port_wu.jpg']
    },
  };
}


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/favicon.png"></link>
      <body >
        <Navigation />
        {children}
        <Footer />
        <SplashCursor />
      </body>
    </html>
  );
}
