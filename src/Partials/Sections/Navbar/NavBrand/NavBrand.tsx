import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/Assets/Home/Brand.jpg";

function NavBrand() {
  return (
    <>
      <div className="">
        <Link href="/">
          <Image
            height={5000}
            width={5000}
            src={logo}
            // className="h-10 w-12"
            className="h-[61px] w-full"
            alt="logo"
          />
        </Link>
      </div>
    </>
  );
}

export default NavBrand;
