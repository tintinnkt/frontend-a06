import Link from "next/link";
import React from "react";

export default function TopMenuItem() {
  return (
    <Link href={"/booking"} className="flex flex-col items-center">
      <p>Menu Item</p>
      <p className="font-bold">Booking</p>
    </Link>
  );
}
