import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};

export default function blog() {
  return (
    <>  
      <div>
        this is  blog page lil bro
      </div>
      <Link href="/"><h1> Home Page Lil Bro</h1></Link>
  </>);
}

