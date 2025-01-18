"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="bg-gray-100 flex rounded-sm items-center overflow-hidden text-black ">
      <Input
        id="searchBar"
        className="bg-gray-100  h-[30px] text-sm rounded-none outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none "
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <label
        htmlFor="searchBar"
        className={`pr-2 ${
          searchValue.length ? "cursor-pointer " : "cursor-text"
        }`}
      >
        <SearchIcon className="w-4 h-4 " />
      </label>
    </div>
  );
};

export default Searchbar;
