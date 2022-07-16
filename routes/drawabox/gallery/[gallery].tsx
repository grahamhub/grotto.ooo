/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import GalleryImage from "../../../components/GalleryImage.tsx";
import Button from "../../../components/Button.tsx";
import { getDrawaboxEntries } from "../../../utils/fsutils.ts";

const filterImages = (gallery: number, images: string[]): h.JSX.Element[] => {
  const filteredImages: h.JSX.Element[] = [];
  const imageNums: number[] = [];

  for (const image of images) {
    if (image.includes(`drawabox_${gallery}`)) {
      const num = image.split("_").pop()?.split(".").shift() || "0";
      imageNums.push(parseInt(num));
    }
  }

  imageNums
    .sort()
    .forEach((num) => {
      filteredImages.push(<GalleryImage
        path={`drawabox_${gallery}_${num}.jpg`}
        title={`drawabox_${gallery}_${num}.jpg`}
      />);
    });

  return filteredImages;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const images = await getDrawaboxEntries();
    return ctx.render({ images });
  }
}

export default function Gallery(props: PageProps) {
  const { images } = props.data;
  return [
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <a href="/drawabox">
        <Button path="left.svg" height="100px" />
      </a>
    </div>,
    filterImages(parseInt(props.params.gallery), images)
  ];
}
