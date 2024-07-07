import { VelocityScroll } from "../../components/ui/scroll-based-velocity";
import Link from "next/link";


export default function ScrollBasedVelocityDemo() {
  const textWithLink = (
    <>
      We are 24*7 Available. To book SUV, Town Car & Van Service, Call Us On{" "}
      <Link href="tel:1234567890" className="text-[#2ab0b0] hover:text-[#2ab0b0]">
        1234567890
      </Link>.
    </>
  );

  return (
    <VelocityScroll
      text={textWithLink}
      default_velocity={1}
      className="font-display uppercase bg-black text-center text-sm mb-1 tracking-[-0.02em] bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-600 drop-shadow-sm md:text-lg md:leading-[3rem]"
    />
  );
}