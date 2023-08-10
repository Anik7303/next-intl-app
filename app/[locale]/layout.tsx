import "@/app/globals.css";
import NavBar from "@/components/navbar";
import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Internationalization (i18n)",
  description: "Next.js Internationalization (i18n) with next-intl",
};

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NavBar locale={locale} />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
