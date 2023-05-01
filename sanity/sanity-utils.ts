import { homePage } from "@/types/homePage";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export async function getHomePage(): Promise<homePage[]> {
  return createClient(config).fetch(groq`
        *[_type == "homePage"] {
            _id,
            createdAt,
            name,
            "slug": slug.current,
            heroText,
            introText,
            introSubText,
            featuresTitle,
            featuresHeader1,
            featuresText1,
            featuresHeader2,
            featuresText2,
            featuresHeader3,
            featuresText3,
            featuresHeader4,
            featuresText4,
            featuresHeader5,
            featuresText5,
            featuresHeader6,
            featuresText6,
            priceTextBasic,
            priceTextEssential,
            priceTextPremium,
            }`);
}
