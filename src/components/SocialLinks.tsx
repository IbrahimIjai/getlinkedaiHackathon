import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedlnIcon } from "@/assets/icons";
export default function SocialsLinks() {
  return (
    <div className="flex gap-3 items-center mt-2">
      <InstagramIcon width="22px" height="22px" />
      <TwitterIcon width="20px" height="20px" />
      <FacebookIcon width="20px" height="20px" />
      <LinkedlnIcon width="25px" height="25px" />
    </div>
  );
}
// I need a hook to get screen size and assign width and heights to these icons
// I need to make this responsive
