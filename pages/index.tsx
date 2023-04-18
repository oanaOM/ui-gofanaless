import Image from "next/image";
import { Inter } from "next/font/google";
import { GrafanaDashboardButton } from "./GrafanaDashboardButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello </h1>
      <GrafanaDashboardButton />
    </main>
  );
}
