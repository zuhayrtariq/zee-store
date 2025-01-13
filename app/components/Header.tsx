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
import UserProfileDropdown from "./UserProfileDropdown";
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
    <>
      <div className="py-4 lg:px-16 md:px-8 h-[80px]  items-center justify-between hidden md:flex">
        <div className="flex items-center gap-8 ">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-tighter">Zee Store</h1>

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
        </div>

        <div className="flex items-center gap-x-4">
          {/* Searchbar */}
          <Searchbar />
          <NavIcons />
        </div>
      </div>
      <div className="md:hidden flex justify-between px-4 py-2">
        {/* Logo */}

        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader className="">
              <SheetTitle className="text-2xl">Zee Store</SheetTitle>
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
        <h1 className="text-xl font-bold tracking-tighter">Zee Store</h1>
        <NavIcons />
      </div>
    </>
  );
};

export default Header;
