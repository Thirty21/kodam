import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function World() {
  const words = ["Cek ", "Codam", "Kalo", "Gak", "Punya", "Someone", "To", "Talk"];

  return (
    <div className="mt-10 flex justify-center items-center px-4 md:mt-20">
      <div className="text-2xl font-bold md:text-4xl md:font-bold mx-auto text-neutral-600 dark:text-purple-400">
        Percuma 
        <FlipWords words={words} /> <br />
        Play Song - kumenangis
      </div>
    </div>
  );
}
