import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="menu">
        <Link href={"/"}>About me</Link>
        <Link href={"/skills"}>Skills</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};
export default Navbar;
