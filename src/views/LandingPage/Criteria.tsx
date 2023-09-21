import Image from "next/image";
import Judge from "./images/Judge.png";
import Text from "@/components/Text";
import { criteriaData } from "./utils/criteriaData";
import { Button } from "@/components/shadcn/Button";

export default function Criteria() {
  return (
    <section className="flex flex-col gap-5 p-5 md:flex-row items-center">
      <Image src={Judge} alt="Girl reading rules" className="max-w-md m-auto" />
      <aside className="flex flex-col items-center md:items-start">
        <Text text="Judging Criteria " type="h3" isWhite />
        <Text text="Key attributes" type="h3" className="mb-5 mt-1" />
        <div className="flex flex-col gap-6">
          {criteriaData.map((criteria) => (
            <div
              key={criteria.title}
              className="max-w-md text-center md:text-left"
            >
              <Text text={criteria.title} className="inline" />
              <Text text={criteria.text} isWhite className="inline" />
            </div>
          ))}
        </div>
        <Button className="mt-4">Read More</Button>
      </aside>
    </section>
  );
}
