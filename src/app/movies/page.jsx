import MediaCard from "@/components/media-card/MediaCard";

export default function MoviesPage() {
  return (
      <div>
        <h1 className="text-center text-xl font-bold mb-5">Film</h1>
        <div className="grid lg:grid-cols-4 gap-3 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
          <MediaCard mediaId={1}/>
        </div>
      </div>
  )
}