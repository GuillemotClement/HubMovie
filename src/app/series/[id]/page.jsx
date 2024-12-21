export default async function SeriePage({ params }) {

  const paramsData = await params;
  const { id } = paramsData;

  return (
      <div className="">
        <h1>Hello SeriePage with id : { id }</h1>
      </div>
  )
}