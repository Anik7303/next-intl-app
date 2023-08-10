import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function TestPage() {
  const t = useTranslations("TestPage");
  return (
    <section>
      <h2>{t("text")}</h2>
      <Link href="/" className="cursor-pointer font-inherit hover:underline">
        {t("home-link")}
      </Link>
    </section>
  );
}
