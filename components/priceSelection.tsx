"use client";
import { useSearchParams } from "next/navigation";

export default function PriceSelection() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("selectedPlan");

  return (
    <select name="plan" id="plan" className="contactUsform w-full " required>
      <option disabled selected value="">
        {"Plan*"}
      </option>
      <option selected={selectedPlan === "BASIC"}>{"BASIC"}</option>
      <option selected={selectedPlan === "ESSENTIAL"}>{"ESSENTIAL"}</option>
      <option selected={selectedPlan === "PREMIUM"}>{"PREMIUM"}</option>
    </select>
  );
}
