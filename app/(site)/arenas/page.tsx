import { getArenas } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function arenas() {
  const arenas = await getArenas();

  return (
    <div className=" defaultSpacing pb-20">
      <h2 className="mt-24 font-bold flex justify-center text-3xl">
        {"OUR PARTNER ARENAS"}
      </h2>
      <div className="borderBox flex justify-center ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 lg:py-5">
          {arenas.map((arenas) => (
            <div key={arenas._id}>
              <Link href={arenas.url} className="hover:scale-105">
                <div className="h-54">
                  {arenas.image && (
                    <Image
                      src={arenas.image}
                      alt={arenas.name}
                      width={200}
                      height={100}
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="mt-2 font-extrabold">{arenas.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl pb-5   ">
          {"Would you like to invite your arena to try  padelplay?"}
        </h2>

        <Link href="/inviteArenas">
          <button className="transparentButton ">{"Invite Your Arean"}</button>
        </Link>
      </div>
    </div>
  );
}
