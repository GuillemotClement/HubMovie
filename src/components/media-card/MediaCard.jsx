import Image from "next/image";

export default function MediaCard() {
  return (
      <div className="border rounded-md shadow overflow-hidden hover:shadow-xl" >
        <div className="relative w-full h-80">
          <Image
              src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/uucVm4TBM07apHYoMwHnmvL5Mre.jpg"
              alt="movie"
              //cette propriété indique que l'image doit remplir le bloc
              //l'image sera placé en position absolut, il faudras définir le bloc parent comme relatif ou fix
              fill
          />
        </div>
        <div className="my-2 px-3 flex flex-col justify-center">
          <h2 className="font-bold text-xl text-center pb-3">Hello MediaCard</h2>
          <p>Date release</p>
        </div>
      </div>
  )
}