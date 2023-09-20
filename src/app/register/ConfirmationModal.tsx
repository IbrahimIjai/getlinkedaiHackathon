import Text from "@/components/Text";
import { Button } from "@/components/shadcn/Button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/shadcn/AlertDialog";
import SuccessMan from "./images/SuccessMan.png";
import SuccessTick from "./images/SuccessTick.png";
import Image from "next/image";

export default function ConfirmationModal() {
  return (
    //   <aside className="flex flex-col gap-3 p-5 overflow-x-hidden w-min-[100%,400px] h-min-[100%,600px]">
    //     <div></div>
    //     <Text
    //       text="Congratulations you have successfully Registered!"
    //       type="h3"
    //       isWhite
    //     />
    //     <Text
    //       text="Yes, it was easy and you did it! check your mail box for next step 😉"
    //       isWhite
    //     />
    //   </aside>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="relative z-57 w-full lg:w-3/4 lg:m-auto">
          Submit
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-[#D434FE]">
        <AlertDialogHeader>
          <div className="flex ">
            <Image src={SuccessTick} alt="SuccessTick" className="z-4" />
            <Image
              src={SuccessMan}
              alt="SuccessMan"
              className="z-5 -ml-[11.5rem]"
            />
          </div>
          <AlertDialogTitle>
            <Text
              text="Congratulations you have successfully Registered!"
              type="h3"
              isWhite
              className="text-center"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            <Text
              text="Yes, it was easy and you did it! check your mail box for next step 😉"
              isWhite
              className="text-center"
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel>
          <Button>Back</Button>
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
