export default async function MoviePage({ params }) {

  const paramsData = await params;
  const { id } = paramsData;

  return (
      <div className="">
        <h1>Hello MoviePage with id : { id }</h1>
      </div>
  )
}