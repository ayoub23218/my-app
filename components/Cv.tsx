type CvEntryProps = {
  title: string;
  description: string;
};
function CvEntry(props: CvEntryProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] min-[700px]:odd:last:col-span-2">
      <h3 className="mb-[0.6rem] text-xl font-semibold dark:text-black">
        {props.title}
      </h3>
      <p className="text-[0.95rem] text-[#444] leading-normal">
        {props.description}
      </p>
    </div>
  );
}
export default function Cv() {
  return (
    <div className="grid grid-cols-1 gap-6 min-[700px]:grid-cols-2">
      <CvEntry
        title="Profil"
        description="Étudiant en troisième année de bachelier en sciences industrielles à l'ECAM Brussels Engineering School, spécialisé en Électronique et Informatique. Passionné par le développement logiciel et les systèmes, je cherche un stage pour mettre en pratique mes compétences."
      />
      <CvEntry
        title="Experience — Activate (2023)"
        description="Travail en équipe pour promouvoir
         des associations et recrutement de nouvelles
          personnes pour la société"
      />
      <CvEntry
        title="Experience — Destiny (2023)"
        description="Gestion de la caisse, relation client et garantie d'une
         expérience positive."
      />
      <CvEntry
        title="Éducation"
        description="3ᵉ année Bachelier en Sciences Industrielles,
         orientation Informatique & Électronique — ECAM Brussels Engineering School
          (2023–présent)"
      />
      <CvEntry
        title="Compétences Techniques"
        description="<strong>Langages :</strong> Python, C#, C<br>
      <strong>Développement Web :</strong> HTML, CSS, JavaScript<br>
      <strong>Bases de données :</strong> SQL, notions de modèles<br>
      <strong>Systèmes & Réseaux :</strong> Linux, notions de réseaux<br>
      <strong>Logiciels :</strong> Microsoft Office, Altium, AutoCAD"
      />
      <CvEntry
        title="Projet — Application de gestion de fédération (C# / Avalonia)"
        description="Développement d'une application de bureau multiplateforme
         basée sur MVVM pour gérer des matchs de fédération (échecs). 
         Architecture modulable adaptable à d'autres sports."
      />
      <CvEntry
        title="Projet — Jeu Démineur"
        description="Développement complet incluant interface graphique, 
        logique de jeu, gestion des mines et découverte automatique 
        des cases."
      />
      <CvEntry
        title="Projet — Algorithme Quarto (Python)"
        description="Création d'une intelligence artificielle analysant le plateau
         et prenant des décisions stratégiques pour gagner la partie."
      />
      <CvEntry
        title="Projets à venir"
        description="Développement d'un site web dynamique et 
        d'une application web via C#, base de données et méthode Scrum."
      />
    </div>
  );
}
