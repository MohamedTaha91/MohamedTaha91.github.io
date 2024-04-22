import Image from "next/image";
import webDev from "../../public/profilePictures/webDev.jpg";
import webDchemicalEngineerev from "../../public/profilePictures/chemicalEngineer.jpg";
import hobbies from "../../public/profilePictures/hobbies.jpg";
import reactLogo from "../../public/Logos/reactLogo.png";

export default function Home() {
  return (
    <div className="details">
      <div className="menu">
        <h3>About me</h3>
        <h3>Skills</h3>
        <h3>Contact</h3>
      </div>
      <div className="carousel">
        <Image
          className="hero-Image"
          src={reactLogo}
          alt="hero image"
          width={100}
          height={100}
        ></Image>
        <div className="small-carousel">
          <Image
            src={webDev}
            alt="webDev profile picture"
            height={50}
            width={50}
          />
          <Image
            src={webDchemicalEngineerev}
            alt="webDev profile picture"
            height={50}
            width={50}
          />
          <Image
            src={hobbies}
            alt="webDev profile picture"
            height={50}
            width={50}
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
