/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

const nextConfig = {}; // Next.js configuration

module.exports = withNextIntl(nextConfig);
