import Image from "next/image";
import BigIdea from "./images/BigIdea.png";
import { Arrow } from "./svg";
import Text from "@/components/Text";

export default function Introduction() {
  return (
    <section className="flex flex-col gap-5 p-5 md:flex-row items-center">
      <aside className="flex md:gap-2 flex-col md:flex-row items-center max-w-md m-auto">
        <Image src={BigIdea} alt="Big Idea " />
        <Arrow className="-m-4 w-7 h-7 md:w-12 md:h-12 md:m-0" />
      </aside>
      <aside className="flex flex-col items-center md:items-start">
        <Text text="Introduction to getlinked" type="h3" isWhite />
        <Text text="tech Hackathon 1.0" type="h3" className="mb-5 mt-1" />
        <Text
          className="max-w-md text-center md:text-left"
          isWhite
          text="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
        />
      </aside>
    </section>
  );
}
