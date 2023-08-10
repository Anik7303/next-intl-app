import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // a list of locales that are supported
  locales: ["en", "bn"],
  // if this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "bn",
});

export const config = {
  // skip all paths that should not be internationalized. This example skips the
  // folder, "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
