"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";



function NavItem({ href, children }) {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link href={href}>
            <div
                className={`${isActive ? "text-primary font-semibold" : "text-neutral-400 hover:text-secondary font-normal hover:font-semibold"
                    }`}
            >
                {children}
            </div>
        </Link>
    );
}

export default NavItem;