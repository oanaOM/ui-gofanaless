import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { GrafanaDashboardButton } from "./GrafanaDashboardButton";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <GrafanaDashboardButton />
      </body>
    </Html>
  );
}
