import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <section>
      <h1 className="text-2xl lg:text-3xl text-center my-2 lg:my-4">{t("title")}</h1>
      <p className="text-lg text-center my-1 lg:my-2">{t("description")}</p>
    </section>
  );
}
