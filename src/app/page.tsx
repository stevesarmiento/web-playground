//import ButtonSkeu from "./components/ButtonSkeu";
//import { Pause, Play, Square } from "lucide-react";

import OnOffToggle from "./components/OnOffToggle";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#151724]">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">     
        <div className="mx-auto bg-[#202739] border-[1px] border-white/10 p-6 rounded-[20px] inline-flex space-x-6 rotate-90">
          <OnOffToggle />

          {/* <ButtonSkeu><Play className="fill-white/80 text-white/0" /></ButtonSkeu>
          <ButtonSkeu><Pause className="fill-white/80 text-white/0" /></ButtonSkeu>
          <ButtonSkeu><Square className="fill-white/80 text-white/0" /></ButtonSkeu> */}
        </div>
      </div>
    </main>
  );
}
