"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const auth = useAuth();

  useEffect(() => {
    if (!auth) return;
    if (!auth.customer) {
      // save attempted url and redirect to signin
      auth.setReturnUrl && auth.setReturnUrl(pathname);
      router.push("/signin");
    }
  }, [auth, pathname, router]);

  if (!auth) return null;
  if (!auth.customer) return null; // while redirecting

  return <>{children}</>;
};

export default ProtectedRoute;
