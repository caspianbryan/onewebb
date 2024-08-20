import Link from "next/link";
import "../styles/globals.css";

const Navbar = () => {
  return (
    <nav className="p-1 m-5">
      <ul className="flex justify-center gap-10">
        <li className="mr-1rem">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-1rem">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
