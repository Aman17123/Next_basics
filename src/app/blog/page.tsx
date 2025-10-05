
import { Metadata } from "next";
import { resolve } from "path";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("International Delay");
    }, 2000);
  })
  return <h1>BLOG</h1>
}