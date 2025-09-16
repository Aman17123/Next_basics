export default async function Docs(
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  }

  if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return (
    <div className="text-5xl text-center text-sky-700 font-extrabold mt-20">
      Welcome Docs
    </div>
  );
}
