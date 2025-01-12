import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import { SearchIcon, ShoppingCartIcon, UserCircle2 } from "lucide-react";

const Header = () => {
  const navItems = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Deals",
      path: "/deals",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="py-4 flex items-center justify-between ">
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-tighter">Zee Store</h1>

      {/* Nav Items */}
      <div>
        {navItems.map((navItem) => (
          <Link
            key={navItem.title}
            href={navItem.path}
            className="hover:font-semibold px-2 transition-all duration-100 letter- hover:tracking-[0px] tracking-[1px]	"
          >
            {navItem.title}
          </Link>
        ))}
      </div>

      {/* Searchbar */}
      <Searchbar />
      <div className="flex items-center gap-x-2 text-xs">
        <p>
          <UserCircle2 className="w-4 h-4 cursor-pointer" />
        </p>
        <p>
          <ShoppingCartIcon className="w-4 h-4 cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default Header;
