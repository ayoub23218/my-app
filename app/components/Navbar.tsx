import Link from "next/link";
import { type ReactNode } from "react";

type NavLinkProps = {
  href: string;
  skills: string[];
  children: ReactNode;
};
function NavLink(props: NavLinkProps) {
  return (
    <li>
      <Link
        href={props.href}
        className="text-[#333] no-underline transition-colors duration-300 hover:text-[#0056d2]"
      >
        {props.children}
        {props.skills.map((skill) => (
          <div>{skill}</div>
        ))}
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-[5%] py-4">
      <div className="text-2xl font-bold text-[#0056d2]">Ayoub</div>

      <ul className="flex list-none gap-8" id="nav-links">
        <NavLink href="#home" skills={["React", "Python"]}>
          Acceuil
        </NavLink>
      </ul>
    </nav>
  );
}
