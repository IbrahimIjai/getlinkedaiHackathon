import StarsBackground from "@/components/Stars";
import { MovementFemale, MovementMale } from "./svg";
import OnboardingPerson from "./images/OnboardingPerson.png";
import Text from "@/components/Text";
import Image from "next/image";
export default function Register() {
  return (
    <main className="flareBg relative">
      <StarsBackground />
      <section>
        <aside className="relative">
          <Image src={OnboardingPerson} alt="Onboarding Person icon" />
        </aside>
        <aside>
          <div className="flex gap-2">
            <Text text="Be part of this movement!" isWhite />
            <div className="relative w-[90px]">
              <MovementFemale className="absolute" />
              <MovementMale className="absolute" />
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
