"use client"
import { usePathname, useRouter } from 'next/navigation';
import ActiveLink from './ActiveLink'
import { useState } from 'react';



function NavItem() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const handleVoteClick = () => {
    router.push("/#vote-section");
  };
  const handleEventClick = () => {
    router.push("/#now-selling");
  };

  return (
    <div className='flex justify-center item-center gap-5 lg:gap-10 px-3 lg:px-4 border-[1px] border-solid border-[#e7ad041a] rounded-2xl'>
      <button onClick={handleEventClick} className={`${isActive ? "text-primary font-semibold" : "text-neutral-400 hover:text-secondary font-normal hover:font-normal "} relative   after:absolute after:h-[1px] after:w-0 after:hover:w-full transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-primary   after:bottom-1 after:left-0 `}>Now Selling</button>
      <ActiveLink href="/upcoming">
        Showing Next
      </ActiveLink>
      <button onClick={handleVoteClick} className={`${isActive ? "text-primary font-semibold" : "text-neutral-400 hover:text-secondary font-normal hover:font-normal"} relative   after:absolute after:h-[1px] after:w-0 after:hover:w-full transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-primary  after:bottom-1 after:left-0`}>Vote For Upcoming</button>
      <ActiveLink href="/pastEvents">
        Past Events
      </ActiveLink>
      <ActiveLink href="/about">
        About
      </ActiveLink>
      <ActiveLink href="/contact">
        Contact
      </ActiveLink>
    </div>
  );
}

export default NavItem;
