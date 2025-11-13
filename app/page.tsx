import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <section
        id="projects"
        className="py-16 px-8 max-w-[1100px] mx-auto bg-white"
      >
        <h2 className="text-center text-3xl font-bold mb-12 text-[#0056d2]">
          Mes Projets
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          <Card
            img="images/projet-1.jpg"
            title="Titre de Mon Projet 1"
            description="Une brève description de ce que fait le projet."
            skills={["python"]}
            href1="#projects"
            href2="https://github.com/ayoub23218"
          />
          <Card
            img="images/projet-1.jpg"
            title="Titre de Mon Projet 2"
            description="Une brève description de ce que fait le projet."
            skills={["HTML", "CSS", "javascript", "typescript"]}
            href1="#projects"
            href2="https://github.com/ayoub23218"
          />
        </div>
      </section>
    </>
  );
}
