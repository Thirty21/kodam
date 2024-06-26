import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Card } from "./Card";
import { World } from "./Word";

export function Background() {
  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden  md:h-screen md:overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="text-white text-3xl font-bold">
          <World/>
          <Card/>
        </div>
      </Vortex>
    </div>
  );
}
