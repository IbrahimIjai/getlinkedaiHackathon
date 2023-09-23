import Text from "@/components/Text";
import { Button } from "@/components/shadcn/Button";
import { Input } from "@/components/shadcn/Input";
import { Textarea } from "@/components/shadcn/Textarea";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "@/hooks/useToaster";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PostContactEndPoint } from "@/config/constants";
import axios from "axios";

type Inputs = {
  first_name: string;
  phone_number: string;
  message: string;
  email: string;
};

const InputClasses =
  "border-solid border border-white rounded px-6 py-4 text-white placeholder:text-white";
export default function ContactForm() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const submitFormMutation = useMutation((data: Inputs) =>
  axios.post(PostContactEndPoint, data)
);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(typeof(data))
    try {
      console.log("starting")
      console.log(data)
      await submitFormMutation.mutateAsync(data);
      queryClient.invalidateQueries(["messahfe"]);

      toast({
        title: "Successful",
        description:
          "Get LinkedAi has received your message. You will be contacted soon. Thank you",
      });
    } catch (error) {
      // Handle any errors here
      console.log(error)
      toast({
        title: "Unsuucesfull",
        description:
          "An error occured, please try again, Thank you",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 md:flex-1 bg-white/5 shadow-[0px_4px_4px_#00000040] p-8 rounded-xl"
    >
      <div className="flex flex-col">
        <Text text="Questions or need assistance?" type="h3" />
        <Text text="Let us know about it!" type="h3" />
      </div>
      <Text
        text="Email us below to any question related to our event"
        isWhite
      />
      <Input
        placeholder="Name"
        type="text"
        className={InputClasses}
        defaultValue=""
        {...register("first_name")}
      />
      <Input
        placeholder="Phone Number"
        type="text"
        className={InputClasses}
        defaultValue=""
        {...register("phone_number")}
      />
      <Input placeholder="Email" type="email" className={InputClasses} />
      <Textarea
        placeholder="Message"
        className={InputClasses}
        defaultValue=""
        {...register("message")}
      />
      <Button type="submit" variant="gradient" className="m-auto">
        {submitFormMutation.isLoading ? "Loading..." : "Submit"}
      </Button>
    </form>
  );
}
