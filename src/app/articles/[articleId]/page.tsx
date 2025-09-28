import Link from "next/link"

export default function NewsArticle({ params , searchParams};{
  params: <{ articleId: string }>;
  searchParams: <{ lang?: "en" | "es" | "fr" }>;
}) {
  return(
    <div>
      <h1 className=" flex font-bold text-4xl text-blue-600 justify-center mt-10">News article id </h1>
      <p className=" flex font-bold text-4xl text-amber-500 justify-center mt-10">Reading in Language</p>

      <div className="justify-center flex gap-4 m-4 mt-10">
        <Link href="/articles/id?lang=en">English</Link>
        <Link href="/articles/id?lang=es">Spanish</Link>
        <Link href="/articles/id?lang=fr">France</Link>
      </div>
    </div>
  )
}