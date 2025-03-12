"use client";
import React, { useState } from "react";
import { Rating } from "@mui/material";

interface CardProps {
  venueName: string;
  imgSrc: string;
  onRatingChange: (venueName: string, newRating: number) => void; // Callback to parent
}

const Card: React.FC<CardProps> = ({ venueName, imgSrc, onRatingChange }) => {
  const [rating, setRating] = useState<number | null>(0); // Controlled state

  const handleRatingChange = (_: any, newValue: number | null) => {
    setRating(newValue);
    if (newValue !== null) {
      onRatingChange(venueName, newValue);
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-md w-64 bg-slate-500">
      <img
        src={imgSrc}
        alt={venueName}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{venueName}</h3>

      <Rating
        id={`${venueName} Rating`}
        name={`${venueName} Rating`}
        data-testid={`${venueName} Rating`}
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Card;
