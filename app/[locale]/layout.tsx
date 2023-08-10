import "@/app/globals.css";
import NavBar from "@/components/navbar";
import { createTranslator, useLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

interface ParamProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata(props: ParamProps) {
  const { locale } = props.params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const t = createTranslator({ messages, locale, namespace: "Home" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

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
