"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function DurationSelection() {
  const searchParams = useSearchParams();
  const selectedDuration = searchParams.get("selectedDuration");
  // const [duration, setDuration] = useState("");

  return (
    <select
      // value={duration}
      // onChange={(e) => setDuration(e.target.value)}
      name="duration"
      id="duration"
      className="contactUsform w-full lg:w-[49%] lg:mr-1"
      required
    >
      <option disabled selected value="">
        {"duration*"}
      </option>
      <option>{"12 Month"}</option>
      <option selected={selectedDuration === "24 month + 20% off"}>
        {"24 month + 20% off"}
      </option>
    </select>
  );
}
