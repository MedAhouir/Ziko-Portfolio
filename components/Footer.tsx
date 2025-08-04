import { PiPhoneCallFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";

const Footer = () => {
  return (
    <footer id="contact" className="px-6 sm:px-12 py-8 bg-black text-white">
      <div className="flex flex-col gap-6 lg:gap-10">
        <h1 className="capitalize text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-sora leading-tight">
          Don't miss your moments
        </h1>

        <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center sm:gap-4">
          <div className="flex gap-2 text-lg sm:text-2xl font-cabin items-center">
            <PiPhoneCallFill />
            <p>+212666666666</p>
          </div>
          <div className="flex gap-2 text-lg sm:text-2xl font-cabin items-center">
            <BiLogoGmail />
            <p>zakariaboulahjar@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center sm:justify-between pt-6 border-t border-white/20 mt-4">
          {SOCIAL_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="font-cabin font-semibold hover:text-secondary transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
