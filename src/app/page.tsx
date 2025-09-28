import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="text-4xl text-center">yes sir </h2>
      <Link href="/blog">BLog Page</Link>
      <Link href="/products">Products</Link>
      <Link href='/articles/breaking-news-123?lang=en'>Read in English</Link>
      <Link href='/articles/breaking-news-123?lang=fr'>Read in French</Link>
    </>);
}
