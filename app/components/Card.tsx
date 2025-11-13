import Link from "next/link";
import { type ReactNode } from "react";

type BtnProps = {
  href: string;
  children: ReactNode;
};
function Btn(props: BtnProps) {
  return <Link href={props.href}>{props.children}</Link>;
}
type CardProps = {
  img: string;
  title: string;
  description: string;
  skills: string[];
  href1: string;
  href2: string;
  children: ReactNode;
};

export default function Card(props: CardProps) {
  return (
    <div className="project-card">
      <img src={props.img} alt="Aperçu de mon projet 1" />
      <div className="project-info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="">
          {props.skills.map((skill) => (
            <span>{skill}</span>
          ))}
        </div>
        <div className="project-links">
          <Btn href={props.href1}> Voir démo</Btn>
          <Btn href={props.href2}>Code Github</Btn>
        </div>
      </div>
    </div>
  );
}
