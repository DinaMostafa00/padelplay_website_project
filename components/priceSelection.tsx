"use client";
// import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PriceSelection() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("selectedPlan");
  // const [plan, setPlan] = useState("");

  return (
    <select
      // value={plan}
      // onChange={(e) => setPlan(e.target.value)}
      name="plan"
      id="plan"
      className="contactUsform w-full "
      required
    >
      <option disabled selected value="">
        {"Plan*"}
      </option>
      <option selected={selectedPlan === "BASIC"}>{"BASIC"}</option>
      <option selected={selectedPlan === "ESSENTIAL"}>{"ESSENTIAL"}</option>
      <option selected={selectedPlan === "PREMIUM"}>{"PREMIUM"}</option>
    </select>
  );
}
