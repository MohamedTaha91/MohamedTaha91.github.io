import Image from "next/image";
import webDev from "../../public/profilePictures/webDev.jpg";
import webDchemicalEngineerev from "../../public/profilePictures/chemicalEngineer.jpg";
import hobbies from "../../public/profilePictures/hobbies.jpg";
import reactLogo from "../../public/Logos/reactLogo.png";
import background from "./../../public/backgroundImage/background.png";

export default function Home() {
  return (
    <div className="details">
      <div className="carousel">
        <Image
          className="heroImage"
          src={reactLogo}
          alt="hero image"
          width={230}
          height={200}
        ></Image>
        <div className="smallCarousel">
          <Image
            className="webDev"
            src={webDev}
            alt="webDev profile picture"
            height={60}
            width={60}
          />
          <Image
            className="chemicalEngineering"
            src={webDchemicalEngineerev}
            alt="webDev profile picture"
            height={60}
            width={60}
          />
          <Image
            className="hobbies"
            src={hobbies}
            alt="webDev profile picture"
            height={60}
            width={60}
          />
        </div>
      </div>
      <div className="description-Title">WebDev</div>
      <div className="description-Text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        dolor, beatae illum atque error similique nostrum ut maxime deleniti
        iure sapiente, itaque quidem incidunt assumenda ea, a recusandae minima?
        Facere!rem ipsum
      </div>
    </div>
  );
}
