
import React from "react";

function MoviesPageLayout({ children }: { children: React.ReactNode }) {
  return <div className="col-span-2">{children}</div>;
}

export default MoviesPageLayout;