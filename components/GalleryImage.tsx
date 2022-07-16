/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Button from "./Button.tsx"
import Image from "./Image.tsx"

interface GalleryImageProps {
  path: string;
  title: string;
}

export default function GalleryImage(props: GalleryImageProps) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Image path={props.path} />
      <div class={tw`flex flex-row`}>
        <a class={tw`basis-1/2`} href={`/${props.title}`} target="_blank">{props.title}</a>
        <Button path={"new-tab.svg"} height={"100px"} flex="none"/>
      </div>
    </div>
  );
}