import Image from "next/image";
import Link from "next/link";

//on récupère l'id de la ressource depuis le composant parent
export default function MediaCard({ mediaId }) {
  return (
      <div className="border rounded-md shadow overflow-hidden hover:shadow-xl" >
        <Link href={`/movies/${mediaId}`}>
          <div className="relative w-full h-80">
            <Image
                src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uucVm4TBM07apHYoMwHnmvL5Mre.jpg"
                alt="movie"
                fill
            />
          </div>
          <div className="my-2 px-3 flex flex-col justify-center">
            <h2 className="font-bold text-xl text-center pb-3">Hello MediaCard</h2>
            <p>Date release</p>
          </div>
        </Link>
      </div>
  )
}