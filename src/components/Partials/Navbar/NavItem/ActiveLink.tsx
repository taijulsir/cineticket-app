"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";



function NavItem({ href, children }: { href?: any; children?: any }) {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link href={href} className={`${isActive ? "text-primary font-semibold" : "text-neutral-400 hover:text-secondary font-normal"
            } text-sm lg:text-base p-3 lg:p-2 h-full flex justify-center items-center relative   after:absolute after:content-[''] after:h-[1px] after:w-0 after:hover:w-full transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-primary   after:bottom-1 after:left-0`}
        >
            {children}
        </Link>
    );
}

export default NavItem;