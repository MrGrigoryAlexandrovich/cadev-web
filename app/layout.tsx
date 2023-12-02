import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import Layout from "./components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "CA DEV",
  description: "We take care of your software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout page={children} />
      </body>
    </html>
  );
}
