"use client";
import Image from "next/image";
import LANGUAGES from "./constant";
import PROJECTS from "./projects";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-title">Tech Skills - What am i good at ?</div>
      <div className="languages">
        <h1 className="languageTitle">Languages:</h1>
        {LANGUAGES.map(({ className, alt, src }) => (
          <Image
            className={className}
            src={src}
            alt={alt}
            height={50}
            width={50}
          ></Image>
        ))}
      </div>
      <div className="projects">
        <h1 className="projectsTitle">Projects :</h1>
        {PROJECTS.map(({ className, alt, src }) => (
          <Image
            className={className}
            src={src}
            alt={alt}
            height={100}
            width={100}
          ></Image>
        ))}
      </div>
    </div>
  );
}
