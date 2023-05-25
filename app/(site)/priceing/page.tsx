import Link from "next/link";

export default async function pricePage() {
  return (
    <div className="defaultSpacing py-10">
      <h1 className="flex justify-center font-bold text-2xl pt-10  ">
        {"PLANS FOR ALL PACKAGES "}
      </h1>
      <p className="flex justify-center text-lg pb-10 font-thin">
        {
          "Our pricing plans are designed to fit your needs, Choose from our flexible subscription options and enjoy high quality streaming and reliable performance."
        }
      </p>

      <div className="overflow-x-auto hidden md:contents">
        <table className=" w-full   border-collapse border-2  border-yellow-500  mb-20">
          <thead>
            <tr>
              <th className="text-left p-4 w-1/6 ">{"FEATURES"}</th>
              <th className=" tableHeader ">{"BASIC"}</th>
              <th className=" tableHeader "> {"ESSENTIAL"}</th>
              <th className=" tableHeader ">{"PREMIUM"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol">
                {"Camera"}
              </td>
              <td className=" colSpacing priceTableCol ">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing  priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
            </tr>

            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol">
                {"Dynamic scoreboard"}
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
            </tr>
            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol">
                {"Ads in stream"}
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
            </tr>

            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol">
                {"QR-code for spontaneous streams"}
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
            </tr>

            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol ">
                {"Remote service and "}
                <p>{"surveillance over the equipment"}</p>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
            </tr>

            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol">
                {"Commentators"}
              </td>
              <td className=" colSpacing priceTableCol">__</td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
            </tr>

            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol">
                {"Youtube channel"}
              </td>
              <td className=" colSpacing priceTableCol">__</td>
              <td className=" colSpacing priceTableCol">__</td>
              <td className=" colSpacing priceTableCol">
                <span className="material-symbols-outlined">done</span>
              </td>
            </tr>
            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol font-bold">
                {"Contract period"}
              </td>
              <td className=" colSpacing priceTableCol">{"12 Month"}</td>
              <td className=" colSpacing priceTableCol">{"12 Month"}</td>
              <td className=" colSpacing priceTableCol">{"12 Month"}</td>
            </tr>

            <tr className="  priceText">
              <td className=" featuresColText colSpacing priceTableCol font-bold">
                {"CTA"}
              </td>
              <td className=" colSpacing priceTableCol">{"Form & Call"}</td>
              <td className=" colSpacing priceTableCol">{"Form & Call"}</td>
              <td className=" colSpacing priceTableCol">{"Form & Call"}</td>
            </tr>

            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol font-bold">
                {"Price"}
              </td>
              <td className=" colSpacing priceTableCol font-bold text-yellow-500">
                {"750kr/month"}
              </td>
              <td className=" colSpacing priceTableCol font-bold text-yellow-500">
                {"1000kr/month"}
              </td>
              <td className=" colSpacing priceTableCol font-bold text-yellow-500">
                {"1500kr/month"}
              </td>
            </tr>

            <tr className="priceText">
              <td className=" colSpacing priceTableCol"></td>

              <td className=" colSpacing priceTableCol  ">
                <Link href="/choosePlan">
                  <button className=" transparentButtonPricePage ">
                    {"GET IT NOW"}
                  </button>
                </Link>
              </td>
              <td className=" colSpacing priceTableCol  ">
                <Link href="/choosePlan">
                  <button className=" transparentButtonPricePage ">
                    {"GET IT NOW"}
                  </button>
                </Link>
              </td>
              <td className=" colSpacing priceTableCol  ">
                <Link href="/choosePlan">
                  <button className=" transparentButtonPricePage ">
                    {"GET IT NOW"}
                  </button>
                </Link>
              </td>
            </tr>

            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol font-bold">
                {"Extras"}
              </td>
              <td className=" colSpacing priceTableCol">
                {"Commentators (350kr/month)"}
                <p> {"Youtube channel (600krmonth)"}</p>
              </td>
              <td className=" colSpacing priceTableCol">
                {"Youtube channel (600krmonth)"}
              </td>
              <td className=" colSpacing priceTableCol">__</td>
            </tr>

            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol font-bold">
                {"Total Price"}
              </td>
              <td className=" colSpacing priceTableCol font-bold text-yellow-500">
                {"1700kr/month"}
              </td>
              <td className=" colSpacing priceTableCol font-bold text-yellow-500 ">
                {"1600kr/month"}
              </td>
              <td className=" colSpacing priceTableCol font-bold text-yellow-500">
                {"1500kr/month"}
              </td>
            </tr>
            <tr className="priceText">
              <td className=" featuresColText colSpacing priceTableCol font-bold">
                {"Special offer"}
              </td>
              <td className=" colSpacing priceTableCol font-bold">
                {"24 month - 20% off"}
              </td>
              <td className=" colSpacing priceTableCol font-bold">
                {"24 month - 20% off"}
              </td>
              <td className=" colSpacing priceTableCol font-bold">
                {"24 month - 20% off"}
              </td>
            </tr>

            <tr className="priceText ">
              <td className=" colSpacing priceTableCol"></td>

              <td className=" colSpacing priceTableCol ">
                <Link href="/choosePlan">
                  <button className=" transparentButtonPricePage ">
                    {"GET IT NOW"}
                  </button>
                </Link>
              </td>
              <td className=" colSpacing priceTableCol">
                <Link href="/choosePlan">
                  <button className=" transparentButtonPricePage ">
                    {"GET IT NOW"}
                  </button>
                </Link>
              </td>
              <td className="colSpacing priceTableCol">
                <Link href="/choosePlan">
                  <button className=" transparentButtonPricePage">
                    {"GET IT NOW"}
                  </button>
                </Link>
              </td>
            </tr>

            <tr className="priceText">
              <td className="featuresColText colSpacing priceTableCol font-bold">
                {"Coming soon"}
              </td>
              <td className=" colSpacing border border-yellow-500 " colSpan="3">
                {"AI-statistics & insights by"}
                <Link href="https://www.plailab.com">
                  <p className="underline hover:scale-105">{"Plailab"}</p>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* small screen rendered here */}
      <div className="md:hidden">
        <div className="grid grid-cols-1 gap-4">
          {/* card One */}
          <div className="bg-transparent border border-yellow-500  p-4">
            <h2 className="text-center font-bold">{"BASIC"}</h2>
            <ul className="mt-4 ">
              <li className="flex items-center">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Camera"}
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Dynamic scoreboard"}
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2">done</span>
                {"Ads in stream"}
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"QR-code for spontaneous streams"}
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-2">done</span>
                {"Remote service and surveillance over the equipment"}
              </li>
            </ul>

            <p className="text-yellow-500 font-bold mt-4">
              {"Price: 750kr/month"}
            </p>
            <p className="font-bold">
              {
                "Extras: Commentators (350kr/month), Youtube channel (600kr/month)"
              }
            </p>
            <p className="text-center text-yellow-500 font-bold pt-6">
              {"Total Price: 1700kr/month"}
            </p>
            <p className="text-center font-thin">
              {"Special offer 24 month - 20% off"}
            </p>
            <div className="flex justify-center mt-4">
              <button className="transparentButtonPricePage">
                {"GET IT NOW"}
              </button>
            </div>
          </div>

          {/* card Two */}
          <div className="bg-transparent border border-yellow-500  p-4">
            <h2 className="text-center font-bold">ESSENTIAL</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Camera"}
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2">done</span>
                {"Dynamic scoreboard"}
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Ads in stream"}
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"QR-code for spontaneous streams"}
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Remote service and surveillance over the equipment"}
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Commentators"}
              </li>
            </ul>

            <p className="text-yellow-500 font-bold mt-4">
              {"Price: 1000kr/month"}
            </p>
            <p className="font-bold">
              {"Extras:  Youtube channel (600kr/month)"}
            </p>
            <p className="text-center text-yellow-500 font-bold pt-6">
              {"Total Price: 1600kr/month"}
            </p>
            <p className="text-center font-thin">
              {"Special offer 24 month - 20% off"}
            </p>
            <div className="flex justify-center mt-4">
              <button className="transparentButtonPricePage">
                {"GET IT NOW"}
              </button>
            </div>
          </div>

          {/* card Three */}
          <div className="bg-transparent border border-yellow-500  p-4">
            <h2 className="text-center font-bold">ESSENTIAL</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Camera"}
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2">done</span>
                {"Dynamic scoreboard"}
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Ads in stream"}
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"QR-code for spontaneous streams"}
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Remote service and surveillance over the equipment"}
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Commentators"}
              </li>

              <li className="flex items-start">
                <span className="material-symbols-outlined  mr-2">done</span>
                {"Youtube channel"}
              </li>
            </ul>

            <p className="text-yellow-500 font-bold mt-4">
              {"Price: 1500kr/month"}
            </p>
            <p className="font-bold">{"Extras: --- "}</p>
            <p className="text-center text-yellow-500 font-bold pt-6">
              {"Total Price: 1500kr/month"}
            </p>
            <p className="text-center font-thin">
              {"Special offer 24 month - 20% off"}
            </p>
            <div className="flex justify-center mt-4">
              <button className="transparentButtonPricePage">
                {"GET IT NOW"}
              </button>
            </div>
          </div>
          {/* The end of cards */}
        </div>
      </div>
    </div>
  );
}
