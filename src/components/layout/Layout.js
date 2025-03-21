import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* Fixed Navbar (sidebar on desktop, top bar on mobile) */}
      <Navbar />

      {/* Main container */}
      <div
        className="
          ml-0 md:ml-60
          pt-16 md:pt-0    /* Only top padding on mobile; none on desktop */
          h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)]
          bg-gray-100
          overflow-y-auto
        "
      >
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full md:left-[15rem] md:w-[calc(100%-15rem)]">
        <Footer />
      </div>
    </>
  );
}
