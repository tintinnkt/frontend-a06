import React from "react";
import TopMenuItem from "./TopMenuItem";
import Image from "next/image";

export default function TopMenu() {
  return (
    <div className="w-full text-white   flex justify-end h-20 py-5 items-center gap-2 px-8 bg-gradient-to-r  from-red-500 to-cyan-500">
      <TopMenuItem />
      <Image src="/img/logo.png" width={40} height={10} alt="logo" />
    </div>
  );
}
