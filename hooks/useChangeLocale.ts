import { usePathname } from "next-intl/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useChangeLocale(locale: string) {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState(locale);

  const changeLocale = (locale: string): void => {
    setLang(locale);
  };

  useEffect(() => {
    if (lang) router.replace(`/${lang}${pathname}`);
  }, [lang]);

  return { locale, changeLocale };
}
