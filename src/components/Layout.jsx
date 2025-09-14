import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <main className="px-4 py-8 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
