"use client";
import { PreviousArrow } from "@/assets/icons";
import SocialsLinks from "@/components/SocialLinks";
import StarsBackground from "@/components/Stars";
import Text from "@/components/Text";
import { Button } from "@/components/shadcn/Button";
import { Input } from "@/components/shadcn/Input";
import { Textarea } from "@/components/shadcn/Textarea";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import ContactForm from "@/views/ContactPage/Form";

type Inputs = {
  first_name: string;
  phone_number: string;
  message: string;
  email: string;
};

const InputClasses =
  "border-solid border border-white rounded px-6 py-4 text-white placeholder:text-white";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  // console.log(watch("Name"))
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
        <ContactForm/>
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
