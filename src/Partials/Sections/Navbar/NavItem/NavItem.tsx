"use client"
import { usePathname } from 'next/navigation';
import ActiveLink from './ActiveLink'



function NavItem() {
  const pathName = usePathname();

  return (
    <div className='flex justify-center item-center gap-10'>
      <ActiveLink href="/upcoming">
        <div>Upcoming</div>
      </ActiveLink>
      <ActiveLink href="/events">
        <div>Past Events</div>
      </ActiveLink>
      <ActiveLink href="/contact">
        <div>Contact</div>
      </ActiveLink>
    </div>
  );
}

export default NavItem;
