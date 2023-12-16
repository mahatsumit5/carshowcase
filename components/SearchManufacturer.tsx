"use client";
import { SearchManufacturerProps } from "@/types";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManufactureres =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, "") //replace empty spacea
            .includes(query.replace(/\s+/g, "").toLocaleLowerCase())
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px] ">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="car logo"
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Lamborghini"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufactureres.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({
                    active,
                  }) => `realtive search-manufacturer__option
                  ${active ? "bg-primary-blue text-white" : "text-gray-900"}
                  
                  `}
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
