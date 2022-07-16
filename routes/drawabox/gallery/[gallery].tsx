/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
import GalleryImage from "../../../components/GalleryImage.tsx";
import Button from "../../../components/Button.tsx";

const filterImages = (gallery: number): h.JSX.Element[] => {
  const images: h.JSX.Element[] = [];
  const imageNums: number[] = [];

  for (const dirEntry of Deno.readDirSync("static/")) {
    if (dirEntry.name.includes(`drawabox_${gallery}`)) {
      const num = dirEntry.name.split("_").pop()?.split(".").shift() || "0";
      imageNums.push(parseInt(num));
    }
  }

  imageNums
    .sort()
    .forEach((num) => {
      images.push(<GalleryImage
        path={`drawabox_${gallery}_${num}.jpg`}
        title={`drawabox_${gallery}_${num}.jpg`}
      />);
    });

  return images;
}

export default function Gallery(props: PageProps) {
  return [
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <a href="/drawabox">
        <Button path="left.svg" height="100px" />
      </a>
    </div>,
    filterImages(parseInt(props.params.gallery))
  ];
}
