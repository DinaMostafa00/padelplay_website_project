"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ExtraSelection() {
  const searchParams = useSearchParams();
  const selectedExtra = searchParams.get("selectedExtra");
  // const [extras, setExtras] = useState("");

  return (
    <select
      // value={extras}
      // onChange={(e) => setExtras(e.target.value)}
      id="extras"
      name="extras"
      className="contactUsform w-full"
    >
      <option disabled selected value="">
        {"Extras"}
      </option>
      <option selected={selectedExtra === "none"}>{"none"}</option>

      <option selected={selectedExtra === "Youtube channel (600krmonth)"}>
        {"Youtube channel (600krmonth)"}
      </option>

      <option
        selected={
          selectedExtra ===
          "Commentators (350kr/month)+ Youtube channel (600krmonth)"
        }
      >
        {"Commentators (350kr/month)+ Youtube channel (600krmonth)"}
      </option>
    </select>
  );
}
