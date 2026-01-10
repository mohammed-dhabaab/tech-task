import Image from "next/image";
import sharedDataType from "../types/sharedDataType";
import { arrowUpIcon } from "../assets/icons";
import Heading from "./Heading";
import Paragraph from "./Paragraph";


export default  function CardCollapse({ icon, title, details }: sharedDataType) {
  return (
    <div className="bg-white flex gap-3 border border-border-light rounded-xl px-6 py-4 cursor-pointer">
              <Image src={icon} alt={title} className="w-7 h-7" />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center">
              <Heading as="h3" size="md"  className="font-medium">{title}</Heading>
              <Image src={arrowUpIcon} alt="collapse-icon" className="w-3 h-3 cursor-pointer" />
            </div>
              <Paragraph size="sm" className="text-text-secondary">{details}</Paragraph>
          </div>
    </div>
  );
}
