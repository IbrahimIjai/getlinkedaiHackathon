import Image from "next/image";
import star_purple from "@/assets/images/star_purple.png";
import star_pink from "@/assets/images/star_pink.png";
import star_grey from "@/assets/images/star_grey.png";
import star_white from "@/assets/images/star_white.png";

export default function StarsBackground() {
  const stars = [star_pink, star_grey, star_purple, star_white];
  const _stars = [
    { star: star_pink, style: { top: "4%", left: "40%" } },
    { star: star_grey, style: { top: "20%", right: "10%" } },
    { star: star_white, style: { bottom: "30%", right: "7%" } },
    { star: star_purple, style: { bottom: "20%", left: "8%" } },
  ];
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      {_stars.map((star, i) => (
        <Image
          height={15}
          width={15}
          alt="star_image"
          src={star.star}
          key={i}
          className="absolute"
          style={star.style}
        />
      ))}
    </div>
  );
}
// I need a hook to get screen size and assign width and heights to these icons
// I need to make this responsive
