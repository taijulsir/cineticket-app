import logo2 from "@/public/Assets/Inner-Plugin-Iframe.svg";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";

function AntopolisHeart() {
  return (
    <div className="footer-text">
      <p className=" w-full flex justify-center items-center gap-1 md:pt-0 pt-4">
        Made with{" "}
        <span>
          <IoMdHeart className="text-primary" />{" "}
        </span>{" "}
        by
        <Link href={"https://theantopolis.com/"} className="text-primary">
          {" "}
          Antopolis
        </Link>
      </p>
    </div>
  );
}

export default AntopolisHeart;
