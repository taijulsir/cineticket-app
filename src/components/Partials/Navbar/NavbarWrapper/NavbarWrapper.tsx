"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavbarWrapper({ children }: { children?: any }) {
  const pathName = usePathname()
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      {/* <div className=" bg-[#212529] h-[90px] z-10 border-[#D9D9D9] border-b flex justify-center items-center"> */}
      <div className={`${isSticky || pathName != "/" ? "border-b" : ""} fixed w-full top-0 bg-[#1E1E1E] z-10 border-[#D9D9D9] h-[70px] lg:h-[90px] flex justify-center items-center`}>
        {children}
      </div>
    </div>
  );
}

export default NavbarWrapper;




