"use client";
import { Link } from "react-scroll";
import { useState } from "react";
import Image from "next/image";
import home from "/public/home.png";
import download from "/public/download.svg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { default as NextLink } from "next/link";

const navigation = [
  { name: "about", href: "/about", current: false },
  { name: "projects", href: "/projects", current: false },
  { name: "contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [currentPage, setCurrentPage] = useState("home");

  function handleSetCurrentPage(e) {
    setCurrentPage(e.target.name);
  }

  return (
    <Disclosure as="nav" className="bg-main sticky top-0 z-10 px-5">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7x">
            <Link
              name="home"
              onClick={handleSetCurrentPage}
              className="absolute w-8 h-8 mt-3 sm:w-12 sm:h-12 z-50"
              to="landing"
              spy={true}
              smooth={true}
              duration={500}
              href="/home"
            >
              <Image src={home} alt="home" />
            </Link>
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
                    sm:text-base
                    hover:text-gray-400"
                >
                  <NextLink
                    href="/Lea_Baldevieso.pdf"
                    download="Lea_Baldevieso.pdf"
                    className="flex flex-row"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="mr-1 tracking-widest">resume</span>
                    <Image
                      src={download}
                      alt="download resume"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                  </NextLink>
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
                    <div className="flex space-x-4 tracking-widest">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          onClick={handleSetCurrentPage}
                          name={item.name}
                          href={item.href}
                          to={item.name}
                          offset={item.name === "contact" ? 0 : -100}
                          spy={true}
                          smooth={true}
                          duration={500}
                          aria-current={item.current ? "page" : undefined}
                          className={
                            currentPage === item.name
                              ? "text-sub-text"
                              : "text-black"
                          }
                        >
                          {item.name}
                        </Link>
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
                <Link
                  to={item.name}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  key={item.name}
                  href={`/${item.name}`}
                  as="a"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
