"use client";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useWixClient } from "@/hooks/useWixClient";

type FilterOptions = {
  name: string;
  choices: string[];
};
const Filter = () => {
  const wixClient = useWixClient();
  const [filterOptions, setFilterOptions] = useState<FilterOptions[] | []>([]);
  useEffect(() => {
    const getOptions = async () => {
      const { items } = await wixClient.products.queryProducts().find();
      const allProductOptions = items.map((item) => {
        const opt = item.productOptions?.map((x) => {
          const type = x.optionType;
          const name = x.name;
          const choices = x.choices?.map((choice) => {
            return choice.description;
          });
          return { type, choices, name };
        });
        return opt;
      });

      const optionsData: FilterOptions[] = allProductOptions.reduce<
        FilterOptions[]
      >(
        (prev, opt) => {
          // Flatten options and deduplicate types
          opt?.forEach((x) => {
            if (!x.name) return; // Skip if name is undefined

            // Check if the name already exists
            const existingOption = prev.find((y) => y.name === x.name);
            if (existingOption) {
              // Add unique choices to the existing name
              x.choices?.forEach((choice) => {
                if (choice && !existingOption.choices.includes(choice)) {
                  existingOption.choices.push(choice);
                }
              });
            } else {
              // Add a new name to the result
              prev.push({
                name: x.name,
                choices:
                  x.choices?.filter((choice): choice is string => !!choice) ||
                  [],
              });
            }
          });

          return prev;
        },
        [] // Initial value of the accumulator
      );
      // optionsData.forEach((x) => (x.name = x.name.toLowerCase()));

      setFilterOptions(optionsData!);
    };
    getOptions();
  }, [wixClient]);
  // const productData =
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleFilterUpdate = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value == "null") {
      params.delete(name);
    } else params.set(name, value);
    replace(`${pathName}?${params.toString()}`);
  };
  // console.log("Search Params : ", searchParams);
  return (
    <div className="flex gap-x-4">
      <Input
        type="number"
        name="min"
        className="w-28 h-8"
        placeholder="Min value"
        onChange={(e) => {
          handleFilterUpdate("min", e.target.value);
        }}
      />
      <Input
        type="number"
        name="max"
        onChange={(e) => {
          handleFilterUpdate("max", e.target.value);
        }}
        className="w-28 h-8"
        placeholder="Max value"
      />
      {filterOptions.map((x) => (
        <Select
          key={x.name}
          onValueChange={(value) => {
            handleFilterUpdate(x.name, value);
          }}
          defaultValue={searchParams.get(x.name) || undefined}
        >
          <SelectTrigger className="w-24 h-8">
            <SelectValue
              className="placeholder:uppercase"
              placeholder={x.name}
            />
          </SelectTrigger>
          {x.name == "Color" ? (
            <SelectContent>
              {x.choices.map((choice) => (
                <SelectItem
                  value={choice}
                  className=""
                  color={choice}
                  key={choice}
                >
                  <span
                    style={{
                      background: choice,
                    }}
                    className="px-3 h-6 rounded-full  border border-black mr-1"
                  ></span>
                  {choice}
                </SelectItem>
              ))}
              <SelectItem value={"null"}>Clear</SelectItem>
            </SelectContent>
          ) : (
            <SelectContent>
              {x.choices.map((choice) => (
                <SelectItem key={choice} value={choice}>
                  {choice}
                </SelectItem>
              ))}
            </SelectContent>
          )}
        </Select>
      ))}
      <Select
        onValueChange={(value) => {
          handleFilterUpdate("Sort", value);
        }}
        defaultValue={searchParams.get("Sort") || undefined}
      >
        <SelectTrigger className="w-24 h-8">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc price">Price (Low to High)</SelectItem>
          <SelectItem value="desc price">Price (High to Low)</SelectItem>
          <SelectItem value="asc lastUpdated">Newest First</SelectItem>
          <SelectItem value="dessc lastUpdated">Oldest First</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
