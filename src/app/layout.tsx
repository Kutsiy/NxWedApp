import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./styles/globals.scss";
import "./styles/variables.scss";
import Main from "@/components/main/main";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        <Main>
          <Header />
          <main>{children}</main>
          <Footer />
        </Main>
      </body>
    </html>
  );
}
