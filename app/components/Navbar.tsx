import Image from "next/image";
import { hamburgerMenuIcon } from "../assets/icons";

interface NavItem {
  id: number;
  name: string;
  href: string;
}

const nav: NavItem[] = [
  { id: 1, name: 'Home', href: '#' },
  { id: 2, name: 'About', href: '#' },
  { id: 3, name: 'Services', href: '#' },
  { id: 4, name: 'Contact', href: '#' },
];

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="md:hidden rounded-full cursor-pointer hover:bg-background-secondary/50 tr w-fit h-fit p-4 border border-border-light transition-colors ease-in-out duration-300">
        <Image src={hamburgerMenuIcon} alt="Logo" className="w-10 h-10" />
      </div>
      <ul className="hidden md:flex w-full justify-center items-center gap-4">
        {nav.map((item) => (
          <li key={item.id}>
            <a href={item.href} className="text-txt-secondary hover:text-text-secondary transition-colors ease-in-out duration-300">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
