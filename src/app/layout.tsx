import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./styles/globals.scss";
import "./styles/variables.scss";
import { HeaderStoreProvider } from "../stores/header/header-store-provider";
import Wrapper from "../components/wrapper/wrapper";

export const metadata: Metadata = {
  title: "egor_kutsiy",
  description: "Resume site",
};

export const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${firaCode.variable}`}>
      <body className={`${firaCode.variable}`}>
        <HeaderStoreProvider>
          <Wrapper>{children}</Wrapper>
        </HeaderStoreProvider>
      </body>
    </html>
  );
}
