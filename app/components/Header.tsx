import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircle2,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavIcons from "./NavIcons";

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
    <div className=" z-20 w-full bg-black/30 ">
      <div className="container-p h-[70px]  items-center justify-between hidden md:flex text-white">
        <div className="flex items-center gap-8 ">
          {/* Logo */}

          {/* Nav Items */}
          <div>
            {navItems.map((navItem) => (
              <Link
                key={navItem.title}
                href={navItem.path}
                className=" px-2 text-white font-medium	tracking-wide hover:underline transition-all duration-1000"
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={"/"}
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-tighter z-50"
        >
          <span className="relative">
            <span className="italic">Z</span>ee Store
            <span className="absolute bottom-0  left-1/2 transform -translate-x-1/2 border w-1/2  border-white"></span>
          </span>
        </Link>
        <div className="flex items-center gap-x-4">
          {/* Searchbar */}
          <Searchbar />
          <NavIcons />
        </div>
      </div>
      <div className="md:hidden flex h-[80px] items-center justify-between px-4 ">
        {/* Logo */}

        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader className="">
              <SheetTitle className="text-3xl">
                {" "}
                <Link
                  href={"/"}
                  className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-tighter z-50"
                >
                  <span className="relative">
                    <span className="italic">Z</span>ee Store
                    <span className="absolute bottom-0  left-1/2 transform -translate-x-1/2 border w-1/2  border-black"></span>
                  </span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className=" h-full mt-8">
              {navItems.map((navItem) => (
                <Link
                  key={navItem.title}
                  href={navItem.path}
                  className="hover:font-semibold px-2 transition-all duration-100 letter- hover:tracking-[0px] tracking-[1px]	block text-lg py-4"
                >
                  {navItem.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href={"/"}
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-tighter z-50"
        >
          <span className="relative text-white">
            <span className="italic">Z</span>ee Store
            <span className="absolute bottom-0  left-1/2 transform -translate-x-1/2 border w-1/2  border-white"></span>
          </span>
        </Link>
        <NavIcons />
      </div>
    </div>
  );
};

export default Header;
