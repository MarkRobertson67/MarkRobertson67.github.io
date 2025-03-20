import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Sidebar (desktop) + Mobile Navbar (top) */}
      <Navbar />

      {/* Main content & Footer */}
      <div className="flex flex-col min-h-screen w-full">
        {/* Main Content Area */}
        <main className="pt-16 md:pt-6 bg-gray-100 p-6 flex-grow ml-0 md:ml-60">
          {children}
        </main>

          {/* Offset Footer Content the same way as main content */}
          <div className="ml-0 md:ml-60">
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
