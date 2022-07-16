/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p class={tw`my-6`}>
        Welcome to my playground website. It's pretty empty right now.
      </p>
      <a class={tw`underline`} href="drawabox">Drawabox</a>
    </div>
  );
}
