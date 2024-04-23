import Image from "next/image";
import css from "../../../public/Logos/css.jpg";
import html from "../../../public/Logos/html.webp";
import javaScript from "../../../public/Logos/javaScript.jpg";
import mongoDb from "../../../public/Logos/mongoDb.webp";
import nextJs from "../../../public/Logos/nextJs.png";
import NodeJs from "../../../public/Logos/NodeJs.webp";
import react from "../../../public/Logos/reactLogo.png";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-title">Tech Skills - What am i good at ?</div>
      <div className="languages">
        <Image
          className="cssLogo"
          src={css}
          alt="css-logo"
          height={50}
          width={50}
        ></Image>
        <Image
          className="htmlLogo"
          src={html}
          alt="html-logo"
          height={50}
          width={50}
        ></Image>
        <Image
          className="javascriptLogo"
          src={javaScript}
          alt="javascript-logo"
          height={50}
          width={50}
        ></Image>
        <Image
          className="mongoDbLogo"
          src={mongoDb}
          alt="mongoDb-logo"
          height={50}
          width={50}
        ></Image>
        <Image
          className="nextJsLogo"
          src={nextJs}
          alt="css-logo"
          height={50}
          width={50}
        ></Image>
        <Image
          className="NodeJsLogo"
          src={NodeJs}
          alt="css-logo"
          height={50}
          width={50}
        ></Image>
        <Image
          className="reactLogo"
          src={react}
          alt="css-logo"
          height={50}
          width={50}
        ></Image>
      </div>
      <div className="projects"></div>
    </div>
  );
}
