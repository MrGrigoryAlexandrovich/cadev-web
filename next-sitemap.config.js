/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.ca-development.com/",
  generateRobotsTxt: true, // (optional)
  outdir: "./out",
  // ...other options
};
