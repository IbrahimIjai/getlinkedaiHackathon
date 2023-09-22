import Image from "next/image";
import ReadRules from "./images/ReadRules.png";
import Text from "@/components/Text";

export default function Rules() {
  return (
    <section className="flex flex-col gap-5  md:flex-row items-center p-10 border-b border-border/20">
      <Image
        src={ReadRules}
        alt="Girl reading rules"
        className="m-auto md:order-1"
      />
      <aside className="flex flex-col items-center md:items-start">
        <Text text="Rules and " type="h3" isWhite />
        <Text text="Guidelines" type="h3" className="mb-5 mt-1" />
        <Text
          text="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
          isWhite
          className="max-w-md text-center md:text-left"
        />
      </aside>
    </section>
  );
}
