import Image from "next/image";
import React from "react";
import flare from "../../../assets/images/flaree.png";

export default function Glow({
  width,
  height,
  top,
  left,
  bottom,
  right,
  src
}: {
  width: string;
  height: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  src:any;
}) {
  return (
    <div style={{position:"absolute", top, left, bottom, right, zIndex: -1}}>
      <div style={{ width, height, position: "relative" }}>
        <Image fill src={src} alt="glow" />
      </div>
    </div>
  );
}
