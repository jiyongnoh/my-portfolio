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

// 배포 Test용 주석 추가

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
      {/* Project Section */}
      <Project />
      {/* Archiving Section */}
      <Archiving />
    </Main>
  );
}
