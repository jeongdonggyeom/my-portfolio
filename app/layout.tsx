import { ReactNode } from "react";
import Layout from "../components/layout";

export default function RootLayout({children}: {children: ReactNode}) {
  return(
    <html lang="kr">
      <head>
        <title>title</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="정동겸의 포트폴리오 사이트입니다." />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
};
