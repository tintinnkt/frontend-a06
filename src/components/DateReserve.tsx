"use client";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateReserve = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className="w-full" />
    </LocalizationProvider>
  );
};

export default DateReserve;
