/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getDrawaboxEntries } from "../../utils/fsutils.ts";

const getGalleries = (images: string[]) => {
  const galleries: h.JSX.Element[] = [];
  const nums: number[] = [];
  
  for (const image of images) {
    const num = image.split("_").at(1) || "0";
    nums.push(parseInt(num));
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

export const handler: Handlers = {
  async GET(_req, ctx) {
    const images = await getDrawaboxEntries();
    return ctx.render({ images });
  }
}

export default function DrawaboxPage(props: PageProps) {
  const { images } = props.data;
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p class={tw`my-6`}>
        Welcome to my drawabox galleries. Here you can see my progress via the exercises I submit.
      </p>
      {getGalleries(images)}
      <a class={tw`underline`} href="/">Return to Playground</a>
    </div>
  );
}
