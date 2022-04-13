import Image from "next/image";
import Link from "next/link";
import IconBookmark from "../../public/images/icons/bookmark.svg";
import Styles from "./header.module.css";

export function Header() {
  return (
    <header>
      <nav className={Styles.nav}>
        <div className={Styles.brand}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={45}
                height={36}
                alt="On-Food"
              />
              <span>OnFood</span>
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Favorities">
              <a>
                <IconBookmark />
                Favoritos
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
