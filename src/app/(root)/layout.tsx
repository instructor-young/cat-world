import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="bg-white">
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
