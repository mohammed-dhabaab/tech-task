"use client";

import Image from "next/image";
import { cardTypes } from "../types/cardTypes";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

export default function CardSelection({ onClick, icon, name, details, checked }: cardTypes) {
  return (
    <div onClick={onClick} className="bg-white flex justify-between items-center gap-2 p-3 border border-border-light rounded-xl cursor-pointer">
      <div className="flex items-center gap-2">
        <Image src={icon} alt={name} className="w-10 h-10" />
        <div className="flex flex-col gap-1">
          <Heading as="h3" size="md">{name}</Heading>
          <Paragraph size="xs" className="text-text-secondary text-sm -mt-1">{details}</Paragraph>
        </div>
      </div>

      <input type="checkbox" onChange={onClick} checked={checked || false} className="w-4 h-4 border border-border-dark/50 cursor-pointer accent-primary" />
    </div>
  );
}
