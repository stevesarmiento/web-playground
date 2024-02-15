import Image from "next/image";
import ButtonSkeu from "./components/button";
import { Play } from "lucide-react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ButtonSkeu><Play /></ButtonSkeu>
      </div>
    </main>
  );
}
