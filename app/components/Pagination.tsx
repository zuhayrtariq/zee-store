"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React from "react";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  console.log("CP", currentPage);
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber: number) => {
    console.log("CALLED");
    console.log(pageNumber);

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="flex justify-between w-full">
      <Button
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </Button>
      <Button
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
