/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.ca-dev.eu/",
  generateRobotsTxt: true, // (optional)
  outdir: "./out",
  // ...other options
};
