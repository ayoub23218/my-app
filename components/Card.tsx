import Link from "next/link";
import { type ReactNode } from "react";

type BtnProps = {
  href: string;
  className: string;
  children: ReactNode;
};
function Btn(props: BtnProps) {
  return (
    <Link href={props.href} className={props.className}>
      {props.children}
    </Link>
  );
}
type CardProps = {
  img: string;
  title: string;
  description: string;
  skills: string[];
  href1: string;
  href2: string;
};

export default function Card(props: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
      <img
        src={props.img}
        alt="Aperçu de mon projet 1"
        className="w-full h-[200px] object-cover dark:text-black"
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#333] mb-3">{props.title}</h3>
        <p className="text-[0.95rem] text-[#666] leading-normal mb-4">
          {props.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {props.skills.map((skill) => (
            <span className="bg-[#e8f0ff] text-[#0056d2] py-1 px-3 rounded-full text-xs font-semibold">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          <Btn
            href={props.href1}
            className="flex-1 no-underline py-[0.7rem] px-4 rounded-full text-center font-semibold transition-all duration-300 ease-in-out bg-[#0056d2] text-white hover:bg-[#003e9d]"
          >
            Voir démo
          </Btn>
          <Btn
            href={props.href2}
            className="flex-1 no-underline py-[0.7rem] px-4 rounded-full text-center font-semibold transition-all duration-300 ease-in-out bg-transparent text-[#0056d2] border-2 border-[#0056d2] hover:bg-[#e8f0ff]"
          >
            Code Github
          </Btn>
        </div>
      </div>
    </div>
  );
}
