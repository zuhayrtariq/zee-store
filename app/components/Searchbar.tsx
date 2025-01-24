"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";

const Searchbar = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const [searchValue, setSearchValue] = useState(
    searchParams.get("name") || ""
  );
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.set("name", searchValue.trim());
    replace(`${window.location.origin}/shop?${params.toString()}`);
  };
  const updateSearchValue = (str: string) => {
    setSearchValue(str);
  };
  return (
    <div className="bg-gray-100 flex rounded-sm items-center overflow-hidden text-black ">
      <Input
        id="searchBar"
        className="bg-gray-100  h-[30px] text-sm rounded-none outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none "
        placeholder="Search"
        value={searchValue}
        onChange={(e) => updateSearchValue(e.target.value)}
      />
      <label htmlFor="searchBar" className={`pr-2`}>
        {searchValue.length ? (
          <SearchIcon
            className="w-4 h-4 cursor-pointer"
            onClick={handleSearch}
          />
        ) : (
          <SearchIcon className="w-4 h-4 cursor-text" />
        )}
      </label>
    </div>
  );
};

export default Searchbar;
