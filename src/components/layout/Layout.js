import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main container (offset by 15rem on desktop) */}
      <div
        className="
          ml-0 md:ml-60
          pt-16 md:pt-0
          h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)]
          overflow-y-auto
        "
      >
        <main>{children}</main>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full md:left-[15rem] md:w-[calc(100%-15rem)]">
        <Footer />
      </div>
    </>
  );
}

// min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-4rem)]