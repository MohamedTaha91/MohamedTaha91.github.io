"use client";
import { useState } from "react";
import Image from "next/image";
import webDev from "../../public/profilePictures/webDev.jpg";
import webDchemicalEngineerev from "../../public/profilePictures/chemicalEngineer.jpg";
import hobbies from "../../public/profilePictures/hobbies.jpg";
import reactLogo from "../../public/Logos/reactLogo.png";

const CONTENT = [
  {
    alt: "personal picture",
    id: 0,
    image: webDev,
    heroImage: webDev,
    title: "WebDev",
    description:
      "As a recent graduate from IronHack with a background inChemical Engineering, I have transitioned into the realm ofFull Stack Development. Passionate about crafting visuallycaptivating applications, I am committed to continuousimprovement in my skill set. Currently employed part-timeat Sloowy as an Associate Developer, I contribute to thedevelopment of an admin dashboard website using Next.JS.My collaborative spirit thrives in a team environment, whereI eagerly engage in solving intricate challenges. I take pridein assuming end-to-end responsibility for the features Idevelop, from initial design concepts to final delivery.",
  },
  {
    alt: "picture of chemical plant",
    id: 1,
    image: webDchemicalEngineerev,
    heroImage: webDchemicalEngineerev,
    title: "Chemical Engineering",
    description:
      "Accumulated Problem Solving and solution implementation skills.\nImplemented Process Design and simulation creation using software for petroleum plants.\n Created Process Schemes , Layouts and Documentation Creation,\n Successfully contributed to closing Purchases with Suppliers and Clients by assigning budgets.",
  },
  {
    alt: "picture of me singing",
    id: 2,
    image: hobbies,
    heroImage: hobbies,
    title: "hobbies",
    description: "Sports , Gaming, Music, Traveling , Voice Acting",
  },
];

export default function Home() {
  const [title, setTitle] = useState(CONTENT[0].title);
  const [heroImage, setheroImage] = useState(CONTENT[0].heroImage);
  const [description, setDescription] = useState(CONTENT[0].description);

  const handleOnClick = (id: number) => {
    const selectedElement = CONTENT[id];
    setTitle(selectedElement.title);
    setheroImage(selectedElement.heroImage);
    setDescription(selectedElement.description);
  };

  return (
    <div className="details">
      <div className="carousel">
        <Image
          className="heroImage"
          src={heroImage}
          alt="hero image"
          width={230}
          height={200}
        ></Image>
        <div className="smallCarousel">
          {CONTENT.map((category) => {
            return (
              <Image
                onClick={() => handleOnClick(category.id)}
                className="webDev"
                src={category.image}
                alt={category.alt}
                height={85}
                width={85}
              />
            );
          })}
        </div>
      </div>
      <div className="description-Title">{title}</div>
      <div className="description-Text">{description}</div>
    </div>
  );
}
