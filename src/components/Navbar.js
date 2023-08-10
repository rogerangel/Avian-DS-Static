"use client";

import Image from "next/image";
import AvianDrivingSchoolLogo from "../../public/AvianDrivingSchoolLogo.png";

function Navbar() {
  const scroll2Sel = (sel) => () => {
    const el = document.getElementById(sel);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky w-screen top-0 z-10 opacity-95">
      <div className="flex w-full h-28 bg-slate-50 flex-col items-center justify-center shadow-md">
        <div className="flex w-full items-center justify-between px-4">
          <div className="flex items-center">
            <button onClick={scroll2Sel("hero")}>
              <Image
                src={AvianDrivingSchoolLogo}
                alt="Avian Driving School Logo"
                width="auto"
                height={120}
              />
            </button>
          </div>
          <div className="flex flex-inline items-center justify-center space-x-8 text-lg">
            <button onClick={scroll2Sel("packages")}>Prices & Packages</button>
            <button onClick={scroll2Sel("faqs")}>About Us</button>
            <button onClick={scroll2Sel("contact")}>Find Us</button>
            <button onClick={scroll2Sel("contact")}>Follow Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
