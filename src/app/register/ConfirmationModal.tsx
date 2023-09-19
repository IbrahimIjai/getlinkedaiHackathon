import Text from "@/components/Text";
import { Button } from "@/components/shadcn/Button";

export default function ConfirmationModal() {
  return (
    <section className="fixed top-full left-full w-full h-full z-50 flex items-center justify-center py-20 bg-black/50 blur">
      <aside className="flex flex-col gap-3 p-5 overflow-x-hidden w-min-[100%,400px] h-min-[100%,600px]">
        <div></div>
        <Text
          text="Congratulations you have successfully Registered!"
          type="h3"
          isWhite
        />
        <Text
          text="Yes, it was easy and you did it! check your mail box for next step 😉"
          isWhite
        />
        <Button>Back</Button>
      </aside>
    </section>
  );
}
