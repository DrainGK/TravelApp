"use client"

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navbarToggled, setNavbarToggled] = useState(false);

  const menuVars = {
    initial: {
      scaleY: 0,
      transition: {
      },
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 0, 0.36, 0],
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.1
      },
    },
    open:{
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <Image
        src={navbarToggled ? "menu_closed.svg" : "menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setNavbarToggled((prevState) => !prevState)}
      />
      <AnimatePresence>
        {navbarToggled && (
          <motion.ul
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-12 origin-top w-full h-screen bg-white p-10"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.key}
                  className={`overflow-hidden regular-16 mb-2 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold`}
                >
                  <motion.div 
                  variants={linkVars}>
                    <Link href={link.href}>{link.label}</Link>
                  </motion.div>
                </li>
              ))}
            </motion.div>
            <div className="flexCenter mb-6">
              <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;