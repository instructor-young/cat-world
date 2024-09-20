import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto container md:max-w-screen-lg flex items-center py-4 px-4">
        <Link href="/" className="font-bold text-xl">
          고양이나라
        </Link>

        <nav className="ml-20">
          <ul>
            <li>
              <Link href={"/cats"}>고양이들</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
