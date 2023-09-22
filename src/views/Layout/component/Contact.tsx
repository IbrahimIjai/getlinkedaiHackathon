import { PhoneIcon, LocationIcon } from "@/assets/icons";

import React from "react";
import { contacts } from "@/config/site";
import Text from "@/components/Text";

export default function ContactCard() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Text type="h3" text="Contact us" />
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <PhoneIcon className=" mt-2"/>
          <span>{contacts.phone}</span>
        </div>
        <div className="flex items-start gap-3">
          <LocationIcon className="mt-1" /> <span>{contacts.location}</span>
        </div>
      </div>
    </div>
  );
}
