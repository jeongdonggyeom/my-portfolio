import { ReactNode } from "react";
import Layout from "../public/components/layout";

export default function RootLayout({children}: {children: ReactNode}) {
  return(
    <html>
      <head></head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
};
