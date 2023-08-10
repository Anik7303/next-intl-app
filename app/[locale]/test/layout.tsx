import { AbstractIntlMessages, NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import pick from "lodash/pick";

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
