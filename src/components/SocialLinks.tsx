import { Instagram, Facebook, X, LinkedIn } from "@/assets/svg/Socials";
export default function SocialsLinks() {
  return (
    <div className="flex gap-3 items-center mt-2">
      <Instagram width="22px" height="22px" />
      <X width="20px" height="20px" />
      <Facebook width="20px" height="20px" />
      <LinkedIn width="25px" height="25px" />
    </div>
  );
}
// I need a hook to get screen size and assign width and heights to these icons
// I need to make this responsive
