import { getHomePage } from "@/sanity/sanity-utils";
import Link from "next/link";

import React from "react";
import Image from "next/image";

// export default async function Home() {
//   const homePage = await getHomePage();
//   return (
//     <div>
//       {homePage.map((homePage) => (
//         <div key={homePage._id}>
//           <div className="sticky h-screen ">
//             <video
//               className="absolute top-0 left-0 w-full h-full object-cover z-0"
//               autoPlay
//               muted
//               loop
//             >
//               <source src="/v1.mp4" type="video/mp4" />
//             </video>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
//               <h1 className="text-4xl font-bold mb-4 ">{homePage.heroText}</h1>
//               <button className="bg-white text-black rounded-full py-4 px-8 font-bold hover:bg-gray-100 transition-colors duration-300 ease-in-out">
//                 Get started
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

export default async function Home() {
  const homePage = await getHomePage();
  return (
    <div>
      {homePage.map((homePage) => (
        <div key={homePage._id}>
          {/* hero section */}
          <div className="relative h-screen">
            <section className=" sticky h-screen top-0 mx-auto flex  items-center justify-between px-8">
              <div>
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/v1.mp4" type="video/mp4" />
                </video>

                <div className=" fixed bottom-22 left-20 ">
                  {/* <h1 className="relvant text-left text-3 font-semibold tracking-wide lg:text-4xl xl:text-5xl text-white z-10 pb-5 ml-2">
                  {homePage.heroText}
                </h1> */}
                  <h1 className="text-2xl md:text-4xl xl:text-5xl bottom-30 left-0 mb-2 mr-50 whitespace-wrap">
                    {homePage.heroText}
                  </h1>

                  <button className=" sticky bg-transparent border border-yellow-500 text-white py-4 px-8 font-bold hover:bg-gray-100 transition-colors duration-300 ease-in-out hover:text-yellow-500">
                    Get started
                  </button>
                </div>
              </div>
            </section>
          </div>
          {/* hero section ends here */}

          {/* mid section */}

          <section className="relative z-40 -mt[-100vh] bg-gradient-to-tr from-black via-black to-[#614944] mb-25 px-3  md:px-10 lg:px-20">
            <div className="mx-3  md:mx-10 lg:mx-20">
              <div className="space-y-7 py-20">
                <h1 className="text-center font-semibold tracking-wide text-white text-xl md:text-2xl lg:text-3xl">
                  {homePage.introText}
                </h1>

                <h2 className="text-center font-thin tracking-wide text-white text-lg md:text-xl lg:text-2xl mx-2 ">
                  {homePage.introSubText}
                </h2>
              </div>

              {/* grid is here */}
              <div>
                <h3 className="text-center font-semibold tracking-wide text-yellow-500 text-2xl md:text-4xl xl:text-5xl">
                  {homePage.featuresTitle}
                </h3>
              </div>

              <div className="">
                <table className="">
                  <tbody>
                    <tr>
                      <td className=" px-4 py-2">
                        <Image
                          src="/66.png"
                          alt="HEJ"
                          width={300}
                          height={200}
                        />
                      </td>
                      <td className=" px-4  py-2">
                        <h3>{homePage.featuresHeader1}</h3>
                        <p>{homePage.featuresText1}</p>
                      </td>
                      <td className=" px-4 py-2">
                        <Image
                          src="/77.png"
                          alt="HEJ"
                          width={300}
                          height={200}
                        />
                      </td>
                      <td className=" px-4 py-2">
                        <h3>{homePage.featuresHeader4}</h3>
                        <p>{homePage.featuresText4}</p>
                      </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">
                        <Image
                          src="/88.png"
                          alt="HEJ"
                          width={300}
                          height={200}
                        />
                      </td>
                      <td className=" px-4 py-2">
                        <h3>{homePage.featuresHeader2}</h3>
                        <p>{homePage.featuresText2}</p>
                      </td>
                      <td className=" px-4 py-2">
                        <Image
                          src="/99.png"
                          alt="HEJ"
                          width={300}
                          height={200}
                        />
                      </td>
                      <td className=" px-4 py-2">
                        <h3>{homePage.featuresHeader5}</h3>
                        <p>{homePage.featuresText5}</p>
                      </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">
                        <Image
                          src="/55.png"
                          alt="HEJ"
                          width={300}
                          height={200}
                        />
                      </td>
                      <td className=" px-4 py-2">
                        <h3>{homePage.featuresHeader3}</h3>
                        <p>{homePage.featuresText3}</p>
                      </td>
                      <td className=" px-4 py-2">
                        <Image
                          src="/44.png"
                          alt="HEJ"
                          width={300}
                          height={200}
                        />
                      </td>
                      <td className=" px-4 py-2">
                        <h3>{homePage.featuresHeader6}</h3>
                        <p>{homePage.featuresText6}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2   md:grid-cols-4  grid-rows-3 gap-4">
                <div className="px-4 py-2">
                  <Image src="/44.png" alt="HEJ" width={300} height={200} />
                </div>
                <div className="bg-blue-500  px-4 py-2">
                  <h3>{homePage.featuresHeader1}</h3>
                  <p>{homePage.featuresText1}</p>
                </div>
                <div className="px-4 py-2">
                  <Image src="/55.png" alt="HEJ" width={300} height={200} />
                </div>
                <div className="bg-blue-500  px-4 py-2">
                  <h3>{homePage.featuresHeader2}</h3>
                  <p>{homePage.featuresText2}</p>
                </div>
                <div className="px-4 py-2">
                  <Image src="/66.png" alt="HEJ" width={300} height={200} />
                </div>
                <div className="bg-blue-500  px-4 py-2">
                  <h3>{homePage.featuresHeader3}</h3>
                  <p>{homePage.featuresText3}</p>
                </div>
                <div className="px-4 py-2">
                  <Image src="/77.png" alt="HEJ" width={300} height={200} />
                </div>
                <div className="bg-blue-500  px-4 py-2">
                  <h3>{homePage.featuresHeader4}</h3>
                  <p>{homePage.featuresText4}</p>
                </div>
                <div className="px-4 py-2">
                  <Image src="/88.png" alt="HEJ" width={300} height={200} />
                </div>
                <div className="bg-blue-500  px-4 py-2">
                  <h3>{homePage.featuresHeader5}</h3>
                  <p>{homePage.featuresText5}</p>
                </div>
                <div className="px-4 py-2">
                  <Image src="/99.png" alt="HEJ" width={300} height={200} />
                </div>
                <div className="bg-blue-500 px-4 py-2">
                  <h3>{homePage.featuresHeader6}</h3>
                  <p>{homePage.featuresText6}</p>
                </div>
              </div>

              <div className="mt-52">
                <h2 className="text-center text-3xl font-bold tracking-wide text-white pb-3 pt-3">
                  PRICING PLANS AND PACKAGES
                </h2>
                <p className="text-center text-xl font-thin tracking-wide text-white pb-6">
                  Our pricing plans are designed to fit your needs, choose from
                  our flexible subscription options and enjoy high quality
                  streaming and reliable performance.
                </p>
              </div>

              <div className="mt-1 mb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="priceBox">
                  <h3 className="priceTitle">BASIC</h3>
                  <p className="priceText">{homePage.priceTextBasic}</p>
                  <Link className="headerLink" href="/prices">
                    <button className="yellowButton">READ MORE</button>
                  </Link>
                </div>

                <div className="priceBox">
                  <h3 className="priceTitle">ESSENTIAL</h3>
                  <p className="priceText">{homePage.priceTextEssential}</p>
                  <Link className="headerLink" href="/prices">
                    <button className="yellowButton">READ MORE</button>
                  </Link>
                </div>

                <div className="priceBox ">
                  <h3 className="priceTitle">PREMIUM</h3>
                  <p className="priceText">{homePage.priceTextPremium}</p>
                  <Link className="headerLink" href="/prices">
                    <button className="yellowButton">READ MORE</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
