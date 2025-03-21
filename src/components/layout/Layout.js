import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* Fixed Navbar (sidebar on desktop, top bar on mobile) */}
      <Navbar />

      {/* 
        Main container:
        - On mobile: no left margin, height = 100vh minus (top navbar + footer) = 8rem.
        - On desktop: offset by 15rem (ml-60) and height = 100vh minus footer (4rem).
        - overflow-y-auto allows scrolling if the content is longer than the container.
      */}
      <div className="ml-0 md:ml-60 h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] bg-gray-100 overflow-y-auto">
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Fixed Footer:
          - On mobile: full width at the bottom.
          - On desktop: shifted right by 15rem so it aligns with main content.
      */}
      <div className="fixed bottom-0 left-0 w-full md:left-[15rem] md:w-[calc(100%-15rem)]">
        <Footer />
      </div>
    </>
  );
}
