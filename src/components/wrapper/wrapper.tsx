"use client";

import { ReactNode } from "react";
import Main from "@/components/main/main";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { useHeaderStore } from "@/stores/header/header-store-provider";
import Menu from "../menu/menu";
import styles from "./wrapper.module.scss";
import { AboutStoreProvider } from "../../stores/about/about-store-provider";

function Wrapper({ children }: { children: ReactNode }) {
  const menuIsOpen = useHeaderStore((state) => state.isOpen);

  return (
    <Main>
      <Header />
      <main className={styles.content}>
        <AboutStoreProvider>
          {menuIsOpen ? <Menu></Menu> : children}
        </AboutStoreProvider>
      </main>
      <Footer />
    </Main>
  );
}

export default Wrapper;
