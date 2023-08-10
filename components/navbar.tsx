"use client";
import useChangeLocale from "@/hooks/useChangeLocale";

interface NavBarProps {
  locale: string;
}

export default function NavBar(props: NavBarProps) {
  const { locale, changeLocale } = useChangeLocale(props.locale);

  return (
    <header>
      <nav className="flex justify-center items-center">
        <select value={locale} onChange={(e) => changeLocale(e.target.value)}>
          <option value="bn">Bangla</option>
          <option value="en">English</option>
        </select>
      </nav>
    </header>
  );
}
