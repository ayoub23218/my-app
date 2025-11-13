import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex h-screen items-center justify-center bg-gradient-to-br from-[#e8f0ff] to-white pt-20"
      >
        <div className="max-w-[700px] text-center">
          <h1 className="mb-4 text-[2.5rem] font-bold">
            Bonjour, je suis <span className="accent">Ayoub</span>
          </h1>
          <h2 className="mb-6 text-[1.2rem] font-semibold text-[#555]">
            Étudiant en informatique / Développeur
          </h2>
          <p className="mb-8 text-[#666]">
            Bienvenue sur mon site. Vous trouverez ici mes projets, mes
            compétences et mes informations de contact.
          </p>
          <a
            href="#projects"
            className="rounded-full bg-[#0056d2] px-6 py-[0.8rem] font-semibold text-white no-underline transition-colors duration-300 hover:bg-[#003e9d]"
          >
            Voir mes projets
          </a>
        </div>
      </section>

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
