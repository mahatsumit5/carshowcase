"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { CustomButton } from ".";
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  useState();
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
    </div>
  );
};

export default CarCard;
