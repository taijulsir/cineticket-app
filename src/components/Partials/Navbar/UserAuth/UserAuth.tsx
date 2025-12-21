"use client";
import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function UserAuth() {
  const [showNavDd, setShowNavDd] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  // const [showForgetPassword, setShowForgetPassword] = useState(true);
  // const [showModal, setShowModal] = useState(false);

  const { customer, logout, setShowModal, showModal, showLoginModal } = useAuth();

  const toggleSignUp = () => {
    setShowSignUp((prevState) => !prevState);

  };

  const handleLogout = () => {
    logout();
  };
  const navddToggle = () => {
    setShowNavDd((prevState) => !prevState);
  };

  return (
    <>

      {!(customer && customer.isVerified) && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogTrigger asChild>
            <button variant="signin" size="lg" onClick={() => setShowModal(true)} className="font-normal px-5 py-2 lg:px-10 bg-transform flex justify-center items-center font-mono border border-[#e7ad0459] text-[#e7ad04d9] text-lg rounded-md shadow-md transition duration-500 hover:shadow-btnHover active:shadow-active" >
              Sign in
            </button>
          </DialogTrigger>
          {showModal && (
            <DialogContent className="bg-[#212529] border-none">
              <div className="pb-16">
                {
                  (showLoginModal || showSignUp) ? (
                    <SignIn setShowModal={setShowModal} toggleSignUp={toggleSignUp} />
                  ) : (
                    <SignUp showModal={showModal} setShowModal={setShowModal} toggleSignUp={toggleSignUp} />
                  )
                }
              </div>
            </DialogContent>
          )}
        </Dialog>
      )}


      {customer && customer.isVerified && (
        <>
          <div className="flex justify-center items-center gap-4 md:hidden lg:hidden">
            <Button variant="signin" size="lg" onClick={handleLogout}>
              Logout
            </Button>
          </div>

          <div className="hidden md:flex lg:flex nav-item dropdown">
            <button className="flex justify-center items-center gap-4 nav-link active" onClick={navddToggle}>
              <p>Hello, {customer.name}!</p>
              {showNavDd ? <IoIosArrowUp className="w-4 h-4 text-[#FFFFFF]" /> : <IoIosArrowDown className="w-4 h-4 text-[#FFFFFF]" />}
            </button>
            <ul className={`dropdown-menu ${showNavDd ? "show" : ""}`}>
              <li onClick={navddToggle}>
                <Link className="menu" href="/profile">
                  My Tickets
                </Link>
              </li>
              <hr className="brightness-50"></hr>
              <li onClick={navddToggle}>
                <Link className="menu" href="/profile">
                  My Profile
                </Link>
              </li>
              <hr className="brightness-50"></hr>
              <li>
                <button className="menu" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </>
      )}

    </>
  );
}

export default UserAuth;
