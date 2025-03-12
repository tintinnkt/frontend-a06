import React from "react";
import Card from "./Card";

export default function CardPanel() {
  return (
    <div className="flex flex-wrap gap-8 w-full justify-start">
      <Card venueName={"The Bloom Pavilion"} imgSrc="/img/bloom.jpg" />
      <Card venueName={"Spark Space"} imgSrc="/img/sparkspace.jpg" />
      <Card venueName={"The Grand Table"} imgSrc="/img/grandtable.jpg" />
    </div>
  );
}
