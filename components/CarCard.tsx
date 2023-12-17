"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { CarDetails, CustomButton } from ".";
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const [open, setOpen] = useState(false);
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content-title">
        <h2>
          {make} {model}
        </h2>
      </div>
      <p>
        <span>Car Rent...</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          fill
          alt="car model"
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="wheel" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="wheel" />
            <p className="text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            btnType="button"
            title="View More"
            containerStyles="w-full rounded-full bg-primary-blue py-[16px]"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setOpen(true)}
          />
        </div>
      </div>
      <div>
        <CarDetails isOpen={open} closeModal={() => setOpen(false)} car={car} />
      </div>
    </div>
  );
};

export default CarCard;
