import Link from "next/link";

export default function NewsArticle({ params, searchParams }) {
  const { articleId } = params;
  const { lang = "en" } = searchParams;

  return (
    <div>
      <h1 className="flex font-bold text-4xl text-blue-600 justify-center mt-10">
        News article id: {articleId}
      </h1>
      <p className="flex font-bold text-2xl text-amber-500 justify-center mt-6">
        Reading in Language: {lang.toUpperCase()}
      </p>

      <div className="justify-center flex gap-4 m-4 mt-10">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
