import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

function Navigation({ setIsDrawerOpen }) {
  return (
    <>
      <div className="nav-bar-container">
        <Link className="text-tertiary-1 nav-bar-item" href="/">
          LIBRA
        </Link>
        <Link className="nav-bar-item" href="/">
          HOME
        </Link>
        <Link className="nav-bar-item" href="/login">
          LOGIN
        </Link>
        <Link className="nav-bar-item" href="/">
          CONTACT
        </Link>
      </div>
    </>
  );
}

export default Navigation;
