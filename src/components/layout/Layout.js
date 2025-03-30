import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
//import brushStroke from "../../images/serator_line.png";

export default function Layout({ children }) {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* The vertical brush stroke, also positioned absolutely to the right of the navbar */}
      {/* <div className="hidden md:block fixed top-0 left-[14rem] h-screen z-10">
        <img
          src={brushStroke}
          alt="Vertical Brush Separator"
          className="h-full w-[30%] object-cover"
        />
      </div> */}

      {/* Main container (offset by 15rem on desktop) */}
      <div
        className="
          ml-0 md:ml-60
          pt-16 md:pt-0
          h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)]
          bg-gray-100
          overflow-y-auto
        "
      >
        <main className="p-6">{children}</main>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full md:left-[15rem] md:w-[calc(100%-15rem)]">
        <Footer />
      </div>
    </>
  );
}
