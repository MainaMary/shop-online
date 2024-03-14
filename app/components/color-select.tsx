"use client";
import React from "react";
import { CartProductType, SelectedImgType } from "../types/types";
interface ColorProps {
  handleColorSelect: (value: SelectedImgType) => void;
  cartItem: CartProductType;
  images: {
    color: string;
    colorCode: string;
    image: string;
  }[];
}
const ColorSelect = ({ handleColorSelect, images, cartItem }: ColorProps) => {
  return (
    <div className="flex gap-3">
      {images?.map((img) => {
        console.log({ img });
        return (
          <div
            key={img.color}
            onClick={() => handleColorSelect(img)}
            className={`w-5 h-5 rounded-full border-teal-400 border flex items-center justify-center ${
              cartItem.selectedImg.color === img.color ? "border-[1px]" : ""
            }`}
          >
            <div
              className={`h-3 rounded-full w-3 border-[1.2px] border-slate-200 cursor-pointer bg-${img.colorCode} `}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorSelect;
