import pick from "lodash/pick";
import { AbstractIntlMessages, NextIntlClientProvider, createTranslator, useLocale, useMessages } from "next-intl";

interface ParamProps {
  params: {
    locale: string;
  };
}
export async function generateMetadata(props: ParamProps) {
  const { locale } = props.params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const t = createTranslator({ messages, locale, namespace: "TestPage" });

  return {
    title: t("title"),
    description: t("text"),
  };
}
interface TestLayoutProps {
  children: React.ReactNode;
}

export default function TestLayout({ children }: TestLayoutProps) {
  const locale = useLocale();
  // retrieve messages from `i18n.ts`
  const allMessages = useMessages();
  const messages = pick(allMessages, "TestPage") as AbstractIntlMessages;

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
