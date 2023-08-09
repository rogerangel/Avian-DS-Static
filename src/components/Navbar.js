"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AvianDrivingSchoolLogo from "../../public/AvianDrivingSchoolLogo.png";

function Navbar() {
  const refs = {
    packages: useRef(null),
    faqs: useRef(null),
    contact: useRef(null),
  };

  return (
    <nav className="sticky w-screen top-0 z-10 opacity-95">
      <div className="flex w-full h-28 bg-slate-50 flex-col items-center justify-center shadow-md">
        <div className="flex w-full items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={AvianDrivingSchoolLogo}
                alt="Avian Driving School Logo"
                width="auto"
                height={120}
              />
            </Link>
          </div>
          <div className="flex flex-inline items-center justify-center space-x-8 text-lg">
            <Link ref={refs.packages} href="/#packages">
              Prices & Packages
            </Link>
            <Link ref={refs.faqs} href="/#faqs">
              About Us
            </Link>
            <Link ref={refs.contact} href="/#contact">
              Find Us
            </Link>
            <Link href="/">Follow Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
