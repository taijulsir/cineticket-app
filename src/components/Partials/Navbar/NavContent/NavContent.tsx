"use client";
import Link from "next/link";
import NavBrand from "../NavBrand/NavBrand";
import NavItem from "../NavItem/NavItem";
import UserAuth from "../UserAuth/UserAuth";
import Image from "next/image";
import menu from "../../../../public/Assets/Home/fi_menu.png";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState } from "react";

function NavContent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const handleVoteClick = () => {
    closeDrawer();
    router.push("/#vote-section");
  };
  const handleEventClick = () => {
    closeDrawer();
    router.push("/#now-selling");
  };

 
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-between items-center py-4">
        <NavBrand />
        <div className="hidden sm:block">
          <NavItem />
        </div>
        <div className="flex justify-center items-center gap-3 relative">
          <UserAuth />
          <div className="block sm:hidden" onClick={toggleDrawer}>
            <Link href="/">
              <Image
                height={500}
                width={500}
                alt="menu"
                src={menu}
                className="h-7 w-7 cursor-pointer"
              />
            </Link>
          </div>
          {isDrawerOpen && (
            <div className="fixed inset-0 z-20">
              <div className="absolute top-0 right-0 h-[300px] w-1/2 bg-[#221C09] opacity-90 rounded-tl-lg rounded-bl-lg mt-4">
                <div className="flex justify-start p-3">
                  <IoMdClose
                    onClick={closeDrawer}
                    className="text-white text-left"
                  />
                </div>
                <div className="space-y-3 pl-3">
                  <button className="smallnav" onClick={handleEventClick}>
                    Now Selling
                  </button>
                  <br></br>
                  <button
                    className="smallnav"
                    onClick={() => router.push("/upcoming")}
                  >
                    Upcoming Movies
                  </button>

                  <br></br>
                  <button className="smallnav" onClick={handleVoteClick}>
                    Vote For Upcoming Movies
                  </button>
                  <br></br>
                  <button
                    className="smallnav"
                    onClick={() => router.push("/pastEvents")}
                  >
                    Past Events
                  </button>
                  <br></br>
                  <button
                    className="smallnav"
                    onClick={() => router.push("/contact")}
                  >
                    Contact
                  </button>
                  <br></br>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavContent;
