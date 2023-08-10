"use client";
import { usePathname } from "next-intl/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavBarProps {
  locale: string;
}

export default function NavBar({ locale }: NavBarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState(locale);

  useEffect(() => {
    if (lang) router.replace(`/${lang}${pathname}`);
  }, [lang]);

  return (
    <header>
      <nav className="flex justify-center items-center">
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="bn">Bangla</option>
          <option value="en">English</option>
        </select>
      </nav>
    </header>
  );
}
