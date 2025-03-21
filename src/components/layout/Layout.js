import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* Fixed sidebar (desktop) & top bar (mobile) */}
      <Navbar />

      {/*
        Container:
        - On mobile: top padding for the top bar (pt-14)
        - On desktop: no top padding (pt-0), but offset left by the sidebar (ml-60)
        - flex-col + min-h-screen => ensures footer is at bottom if content is short
      */}
      <div className="flex flex-col min-h-screen bg-gray-100 pt-14 md:pt-0 md:ml-60">
        {/* Main content grows to push footer down if there's little content */}
        <main className="flex-grow p-6">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}

