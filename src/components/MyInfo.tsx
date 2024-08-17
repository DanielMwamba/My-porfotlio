import React from "react";

// Définition de l'interface pour les données HelloWorld

const MyInfo: React.FC = () => {
  return (
    <div className="relative p-4 rounded-lg bg-custom">
      <div className="absolute top-6 left-12 blinking-rectangle"></div>
      <div className="font-mono text-sm text-gray-400 md:text-lg">
        SALUT ! Je suis Daniel Mwamba (DM).{" "}
        <span className="text-yellow-300">Dévellopeur Full Stack</span> avec un
        diplôme en informatique et une expérience en devellopement web. Je suis toujours en train
        de développer mes compétences et d'apprendre quelque chose de nouveau.
        J'ai une soif de connaissances et un désir de comprendre comment les
        choses fonctionnent ; je suis un homme de contact, un bricoleur, un
        pasionnée de la technologie.
      </div>
    </div>
  );
};

export default MyInfo;
