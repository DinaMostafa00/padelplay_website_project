"use client";
import Link from "next/link";
import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
// import { Fragment } from "react-is/node_modules/@types/react";
import { Fragment } from "react";

export const Header = () => {
  return (
    <Popover>
      <header className="relative top-0 z-30 flex w-full items-center justify-between bg-transparent py-10 ">
        <div className="flex items-center justify-center md:w-1/5">
          <Link href="/">
            <div className="relative cursor-pointer opacity-75 transtion hover:opacity-100 font-bold px-10 text-2xl">
              {"PadelPlay"}
            </div>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-center space-x-8 lg:flex ">
          <Link className="hover:text-yellow-500" href="/product">
            {" PRODUCT"}
          </Link>
          <Link className="hover:text-yellow-500" href="/priceing">
            {"PRICES "}
          </Link>
          <Link className="hover:text-yellow-500" href="/arenas">
            {"      ARENAS"}
          </Link>
          <Link className="hover:text-yellow-500" href="/blog">
            {"  BLOG "}
          </Link>
        </div>

        <div className=" hidden relative cursor-pointer opacity-75 transition hover:opacity-100 px-10 mx-20  border-2 border-yellow-300 lg:flex">
          <Link className="headerLink" href="/contactus">
            {"  CONTACT US  "}
          </Link>
        </div>

        <div className="flex grow items-center justify-end px-10  lg:hidden">
          <Popover.Button className="Inline-flex Items-center justify-center border border-yellow-500 bg-transparent p-2 text-gray-400 [hover:bg-gray-100 hover: text-gray-500)focus: outLine-none focus: ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon
              className="h-6 w-6 text-yellow-500 "
              ario-hidden="true"
            />
          </Popover.Button>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="rounded-1g bg-black shadow-1g ring-1 ring-yellow-500 jing-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex Items-center justify-between">
                  <div className="-mr-2">
                    <Popover.Button className="Inline-flex Items-center justify-center rourded-id Dg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus: outline-none focus: ring-2 focus: ring-inset focus: ring-Indigo-500">
                      <span className="sr-only">Close menus </span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className=" mt-6  ">
                  <nav className="grid gap-y-8">
                    <Link className="hover:text-yellow-500" href="/">
                      {" HOME"}
                    </Link>
                    <Link className="hover:text-yellow-500" href="/product">
                      {" PRODUCT"}
                    </Link>
                    <Link className="hover:text-yellow-500" href="/priceing">
                      {"PRICES "}
                    </Link>
                    <Link className="hover:text-yellow-500" href="/arenas">
                      {"      ARENAS"}
                    </Link>
                    <Link className="hover:text-yellow-500" href="/blog">
                      {"  BLOG "}
                    </Link>
                    <div className="flex justify-center">
                      <Link className="transparentButton " href="/contactus">
                        {"  CONTACT US  "}
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </header>
    </Popover>
  );
};
