"use client";

import Image from "next/image";
import home from "/public/home.png";
import download from "/public/download.svg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "about", href: "#", current: false },
  { name: "projects", href: "#", current: false },
  { name: "contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-main sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7x">
            <Image
              src={home}
              alt="home"
              className="absolute w-8 h-8 mt-3 sm:w-12 sm:h-12"
            />
            <div className="relative flex h-16 items-center justify-between flex-row-reverse sm:h-20">
              <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto">
                <button
                  type="button"
                  className="
                    relative 
                    bg-transparent 
                    p-2
                    text-black 
                    hover:text-gray 
                    flex items-center 
                    justify-center 
                    border-2 
                    border-accent
                    text-sm
                    sm:text-base"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="mr-1">resume</span>
                  <Image
                    src={download}
                    alt="download resume"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                </button>
                <div className="relative inset-y-0 right-0 flex items-center sm:hidden sm:sticky sm:top-0 sm:z-50">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-gray">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-black hover:text-gray-400",
                            "rounded-md px-3 py-2 text-sm font-sm sm:text-base"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute bg-main right-0 w-full origin-top-right rounded-md shadow-lg text-center">
            <div className="pb-1 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-gray-400"
                      : "text-black hover:text-gray-400",
                    "block rounded-md px-3 py-3 text-sm font-sm"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
