"use client"

import { ReactNode } from "react";
import GlobalStyle from "../../styles/GlobalStyle";

export default function Layout({children}: {children: ReactNode}) {
  return(
    <>
      <GlobalStyle />
      <main>
        {children}
      </main>
    </>
  )
};
