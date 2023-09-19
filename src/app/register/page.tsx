import StarsBackground from "@/components/Stars";
import { MovementFemale, MovementMale } from "./svg";
import OnboardingPerson from "./images/OnboardingPerson.png";
import Text from "@/components/Text";
import Image from "next/image";
import { Input } from "@/components/shadcn/Input";
import { Label } from "@/components/shadcn/Label";
import { InputComponentData, SelectComponentData } from "./staticData";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/Select";
import { Checkbox } from "@/components/shadcn/Checkbox";
import { Button } from "@/components/shadcn/Button";
import ConfirmationModal from "./ConfirmationModal";

export default function Register() {
  return (
    <main className="flareBg bg-secondary relative w-full">
      <ConfirmationModal />
      <StarsBackground />
      <section className="p-6 lg:flex">
        <aside className="relative max-w-[500px] flex flex-col gap-2 m-auto">
          <Text text="Register" type="h1" className="md:hidden" />
          <Image src={OnboardingPerson} alt="Onboarding Person icon" />
        </aside>
        <aside className="flex flex-col gap-6 md:flex-1 shadow-[0px_4px_4px_#00000040] p-8 rounded-xl ssm:max-lg:max-w-[430px] ssm:m-auto">
          <Text text="Register" type="h1" className="hidden md:block" />
          <div className="flex gap-2">
            <Text text="Be part of this movement!" isWhite />
            <div className="relative w-[90px]">
              <MovementFemale className="absolute" />
              <MovementMale className="absolute" />
            </div>
          </div>
          <Text text="Create your Account" isWhite type="h1" />
          <div className="inputWithLabel flex flex-col gap-6 lg:flex-row lg:flex-wrap">
            {InputComponentData.map((input, i) => (
              <InputWithLabel
                key={input.id}
                id={input.id}
                placeholder={input.placeholder}
                label={input.label}
                type={input.type}
                index={i}
              />
            ))}
          </div>
          <div className="selectWithLabel flex flex-col gap-4 w-full min-[430px]:flex-row lg:gap-6">
            {SelectComponentData.map((select, i) => (
              <SelectWithLabel
                key={select.id}
                id={select.id}
                label={select.label}
                options={select.options}
                placeholder={select.placeholder}
                index={i}
              />
            ))}
          </div>
          <Text text="Please review your registration details before submitting" />
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agreed with the event terms and conditions and privacy policy
            </label>
          </div>
          <Button className="m-auto">Submit</Button>
        </aside>
      </section>
    </main>
  );
}

interface InputWithLabelProps {
  id: string;
  placeholder: string;
  label: string;
  index: number;
  type?: string;
}
function InputWithLabel({
  id,
  placeholder,
  label,
  type,
  index,
}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 lg:w-[calc(50%-20px)]">
      <Label htmlFor={id} className="text-white">
        {label}
      </Label>
      <Input
        type={type ? type : "text"}
        id={id}
        placeholder={placeholder}
        className="border-solid border border-white rounded px-6 py-6"
      />
    </div>
  );
}

interface SelectWithLabelProps extends InputWithLabelProps {
  options: string[];
}
function SelectWithLabel({
  options,
  placeholder,
  label,
  id,
  index,
}: SelectWithLabelProps) {
  return (
    <div
      className={`grid w-full max-w-sm items-center gap-1.5 lg:w-[calc(50%-20px)] ${
        index === 0
          ? "min-[430px]:max-md:w-[65%]"
          : "min-[430px]:max-md:w-[35%]"
      }`}
    >
      <Label htmlFor={id} className="text-white">
        {label}
      </Label>
      <Select>
        <SelectTrigger className="w-full text-white border-solid border border-white rounded px-6 py-6">
          <SelectValue
            placeholder={placeholder}
            className="placeholder:text-white"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-white">{placeholder}</SelectLabel>
            {options.map((option) => (
              <SelectItem
                value={option.toLowerCase()}
                key={option.toLowerCase()}
              >
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
