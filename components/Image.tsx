/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface ImageProps {
  path: string
  alt?: string
  title?: string
}

export default function Image(props: ImageProps) {
  return <img
    title={props.title || "Untitled"}
    src={`/${props.path}`}
    class={tw`mx-auto`}
    alt={props.alt || "No alt text was provided on upload."}
  />
}
