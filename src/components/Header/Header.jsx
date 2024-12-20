import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
      <header className="flex justify-between px-6 py-2 items-center shadow-md">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" width={40} height={50} alt="Logo" className="mr-2"/>
          <p className="text-xl font-bold">HubMovies</p>
        </Link>
        <div className="">
          <nav>
            <ul className="flex gap-x-2">
              <Link href="/">Accueil</Link>
              <Link href="/series">Séries</Link>
              <Link href="/movies">Films</Link>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <input type="text" className="border rounded-md py-1 px-1 shadow mr-4" placeholder="Rechercher un titre"/>
          <div className="">
            <FontAwesomeIcon icon={faUser} className=""/>
          </div>
        </div>
      </header>
  )
}