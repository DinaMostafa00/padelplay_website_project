import InviteArena from "@/components/inviteArena";
import Link from "next/link";
import React from "react";

export default async function inviteArenas() {
  return (
    <div className="defaultSpacing">
      <Link href="/arenas">
        <button className="underline hover:text-yellow-500 ml-8 opacity-50 hover:opacity-100">
          {"<back"}
        </button>
      </Link>
      <h1 className="flex justify-center text-xl font-bold md:text-2xl  my-10 xl:my-15">
        {"Bring our streaming to your arena."}
      </h1>

      <InviteArena />
    </div>
  );
}
