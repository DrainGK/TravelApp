"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
  const [navbarToggled, setNavbarToggled] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ">
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"/>
        </div>

        <Image
          src={navbarToggled ? "menu_closed.svg" : "menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => setNavbarToggled(prevState => !prevState)}
        />

        {navbarToggled && (
          <ul className="absolute top-20 left-0 right-0 bg-white flex-col items-center shadow-md">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.key}
                className={`regular-16 mb-2 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <div className="flexCenter mb-6">
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </div>
          </ul>
        )}
        
    </nav>
  )
}

export default Navbar