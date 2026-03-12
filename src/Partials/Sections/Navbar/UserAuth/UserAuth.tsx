"use client";
import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

function UserAuth() {
  const [showSignUp, setShowSignUp] = useState(true);
  // const [showForgetPassword, setShowForgetPassword] = useState(true);
  // const [showModal, setShowModal] = useState(false);

  const { customer, logout, setShowModal, showModal, showLoginModal } = (useAuth() as any) || {};

  const toggleSignUp = () => {
    setShowSignUp((prevState) => !prevState);

  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>

      {!(customer && customer.isVerified) && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogTrigger asChild>
            <Button variant="signin" size="lg" onClick={() => setShowModal(true)} className="font-normal">
              Sign in
            </Button>
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


        <div className="flex justify-center items-center gap-4">
          <Button variant="auth" size="lg" onClick={handleLogout}>
            Logout
          </Button>
        </div>

      )}
    </>
  );
}

export default UserAuth;
