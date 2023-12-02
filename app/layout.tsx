import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import MainLayout from "./MainLayout";
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
        <MainLayout page={children} />
      </body>
    </html>
  );
}
