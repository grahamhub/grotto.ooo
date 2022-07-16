/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const getGalleries = () => {
  const galleries: h.JSX.Element[] = [];
  const nums: number[] = [];
  
  for (const dirEntry of Deno.readDirSync("static/")) {
    if (dirEntry.name.includes(`drawabox_`)) {
      const num = dirEntry.name.split("_").at(1) || "0";
      nums.push(parseInt(num));
    }
  }

  [...new Set(nums)]
    .sort()
    .forEach((num) => {
      galleries.push(
        <a class={tw`underline`} href={`/drawabox/gallery/${num}`}>View Gallery {num}</a>, <br />
      );
    });

  return galleries;
};

export default function DrawaboxPage() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p class={tw`my-6`}>
        Welcome to my drawabox galleries. Here you can see my progress via the exercises I submit.
      </p>
      {getGalleries()}
      <a class={tw`underline`} href="/">Return to Playground</a>
    </div>
  );
}
