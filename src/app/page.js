'use client'
import Image from "next/image";
import { useEffect } from "react";
import Intro from '../components/intro'
import Description from "@/components/description";
import Projects from "../components/projects";

export default function Home() {

  useEffect(() => {
   (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();

      }

    )()
  }, [])
  return (
    <main className="flex flex-col gap-5">
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}
