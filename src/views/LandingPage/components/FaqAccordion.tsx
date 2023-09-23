import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/Accordion";
import Text from "@/components/Text";
import { siteConfig } from "@/config/site";

export function FaqAccordion() {
  return (
    <div className="flex lg:pl-[4rem]  lg:mt-[5rem] flex-col items-center gap-4 lg:items-start w-full">
      <Text type="h1" text="Frequently Asked" isWhite />
      <Text type="h1" text="Questions" className="mb-3"/>
      <div>
        <Text
          type="p"
          isWhite
          className="text-gray-400 inline"
          text="We got answers to the questions that you might want to ask about"
        />
        <Text
          type="p"
          isWhite
          className="font-bold inline "
          text=" getlinked Hackathon 1.0"
        />
      </div>
      {/* <br />  */}
      <Accordion type="single" collapsible className="w-full">
        {siteConfig.FaQs.map(({ question, answer, value }) => {
          return (
            <AccordionItem value={`item-${value.toString()}`} key={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
