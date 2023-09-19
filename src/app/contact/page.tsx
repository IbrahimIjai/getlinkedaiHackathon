import { PreviousArrow } from "@/assets/icons";
import SocialsLinks from "@/components/SocialLinks";
import StarsBackground from "@/components/Stars";
import Text from "@/components/Text";
import { Button } from "@/components/shadcn/Button";
import { Input } from "@/components/shadcn/Input";
import { Textarea } from "@/components/shadcn/Textarea";
import Link from "next/link";

const InputClasses =
  "border-solid border border-white rounded px-6 py-4 text-white placeholder-white";

export default function ContactPage() {
  return (
    <main className="flareBg  relative flex flex-col  ssm:items-center">
      <StarsBackground />
      <section className="flex px-8 py-12 flex-col md:flex-row z-4 relative ssm:max-w-md md:max-w-full md:w-full md:items-center">
        <div className="w-full md:hidden">
          <Link href="/" className="w-fit">
            <PreviousArrow />
          </Link>
        </div>
        <aside className="hidden md:flex flex-col gap-3 md:flex-1 pl-8 ">
          <Text text="Get in touch" type="h1" />
          <Text text="Contact Information" isWhite />
          <div>
            <Text text="27, Alara Street" isWhite />
            <Text text="Yaba 100012" isWhite />
            <Text text="Lagos State" isWhite />
          </div>
          <Text text="Call Us: 07067981819" isWhite />
          <div>
            <Text text="we are open from Monday-Friday" isWhite />
            <Text text="08:00am - 05:00pm" isWhite />
          </div>
          <div className="flex flex-col">
            <Text text="Share on" />
            <SocialsLinks />
          </div>
        </aside>
        <aside className="flex flex-col gap-6 md:flex-1 shadow-[0px_4px_4px_#00000040] p-8 rounded-xl">
          <div className="flex flex-col">
            <Text text="Questions or need assistance?" type="h3" />
            <Text text="Let us know about it!" type="h3" />
          </div>
          <Text
            text="Email us below to any question related to our event"
            isWhite
          />
          <Input
            placeholder="Team's Name"
            type="text"
            className={InputClasses}
          />
          <Input placeholder="Topic" type="text" className={InputClasses} />
          <Input placeholder="Email" type="email" className={InputClasses} />
          <Textarea placeholder="Message" className={InputClasses} />
          <Button className="m-auto">Submit</Button>
        </aside>
        <aside className="flex flex-col items-center md:hidden">
          <Text text="Share on" />
          <SocialsLinks />
        </aside>
      </section>
    </main>
  );
}
/*
glass effect on 2nd aside
background-color: #ffffff08;
border-radius: 12px;
box-shadow: 0px 4px 4px #00000040;
*/
