import type { Metadata } from "next";

import Main from "../../components/Main";
import Introduce from "../../components/Introduce";
import About from "../../components/About";
import Skill from "../../components/Skill";
import Archiving from "../../components/Archiving";
import Project from "../../components/Project";

export const metadata: Metadata = {
  title: "노지용's Portfolio",
  icons: {
    icon: "/favicon.ico?v=1", // 캐시 무효화
    shortcut: "/favicon.ico?v=1",
    apple: "/favicon.ico?v=1",
  },
};
export const revalidate = 0; // SSG 활성화

export default function Home() {
  return (
    <Main>
      {/* Introduce Section */}
      <Introduce />
      {/* About Section */}
      <About />
      {/* Skill Section */}
      <Skill />
      {/* Archiving Section */}
      <Archiving />
      {/* Project Section */}
      <Project />
    </Main>
  );
}
