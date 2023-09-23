import Image from "next/image";
import React from "react";
import flare from "../../../assets/images/flaree.png";

export default function Stars({
  top,
  left,
  bottom,
  right,
  src,
}: {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  src: any;
}) {
  return (
    <Image
      src={src}
      alt="blinks"
      style={{ position: "absolute", top, left, bottom, right, zIndex: -1 }}
    />
  );
}
