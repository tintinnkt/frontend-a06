"use client";
import { useState } from "react";
import { Box, MenuItem, Select, TextField } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function page() {
  const [venue, setVenue] = useState("");
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col w-1/2 max-w-xs justify-center items-center bg-neutral-100 text-black p-10 rounded-md">
        <h1 className="text-2xl font-bold text-center">Venue Booking</h1>
        <form className="space-y-4 max-w-xs w-full flex flex-col items-center justify-center py-3">
          <TextField
            variant="standard"
            aria-invalid="false"
            type="text"
            name="Name-Lastname"
            label="Name-Lastname"
            className="w-full"
          />
          <TextField
            variant="standard"
            aria-invalid="false"
            type="text"
            name="Contact-Number"
            label="Contact-Number"
            className="w-full"
          />
          <Select
            className="w-full"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          >
            <MenuItem value={"Bloom"}>The Bloom Pavilion,</MenuItem>
            <MenuItem value={"Spark"}>Spark Space</MenuItem>
            <MenuItem value={"GrandTable"}>The Grand Table</MenuItem>
          </Select>
          <DateReserve />
          <button
            type="submit"
            className="bg-black w-full text-white px-4 py-3 rounded-md hover:bg-neutral-800 transition-colors"
            name="Book Venue"
            onClick={() => {}}
          >
            Book Venue
          </button>
        </form>
      </div>
    </div>
  );
}
