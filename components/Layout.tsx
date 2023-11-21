import { Head } from "$fresh/runtime.ts";
import type { ComponentChildren } from "preact";
import Nav from "./Nav.tsx";

interface LayoutProps {
  isLoggedIn?: boolean;
  compactNav?: boolean;
  children: ComponentChildren;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Fresh Auth</title>
      </Head>
      <Nav loggedIn={props.isLoggedIn} compact={props.compactNav} />
      <div class="p-4 mx-auto max-w-screen-md">
        {props.children}
      </div>
    </>
  );
}
