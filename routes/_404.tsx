/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return <img
    src="/pulp-fiction-john-travolta.gif"
    class={tw`aspect-video mx-auto`}
  />;
}