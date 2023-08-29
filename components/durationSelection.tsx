"use client";
import { useSearchParams } from "next/navigation";

export default function DurationSelection() {
  const searchParams = useSearchParams();
  const selectedDuration = searchParams.get("selectedDuration");

  return (
    <select
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
