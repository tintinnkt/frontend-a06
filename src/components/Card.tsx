"use client";
import React, { useState } from "react";
import { Rating } from "@mui/material";
import InteractiveCard from "./InteractiveCard";

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
    <InteractiveCard>
      <div className="border rounded-lg pb-4 shadow-md w-full bg-slate-100">
        <img
          src={imgSrc}
          alt={venueName}
          className="w-full h-40 object-cover rounded-md"
        />
        <div className="px-3">
          <h3 className="text-lg font-semibold mt-2 text-slate-700">
            {venueName}
          </h3>

          <Rating
            id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={handleRatingChange}
          />
        </div>
      </div>
    </InteractiveCard>
  );
};

export default Card;
