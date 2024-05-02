import Link from "next/link";

function Menu() {
  <div className="menu">
    <Link href={"/"}>About me</Link>
    <Link href={"/skills"}>Skills</Link>
    <Link href={"/contact"}>Contact</Link>
  </div>;
}

export default Menu;
