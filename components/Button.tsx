/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface ButtonProps {
  path: `${string}.svg`
  height: `${number}px`
  basis?: `basis-${string}`
  alt?: string;
  flex?: string;
}

export default function Button(props: ButtonProps) {
  return <img
    src={`/${props.path}`}
    height={props.height}
    class={tw`${props.basis} ${props.flex ? "flex-".concat(props.flex) : ""}`}
    alt={props.alt || props.path}
  />
}
  