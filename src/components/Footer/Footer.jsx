import { IconBrandFacebook, IconBrandGmail, IconBrandInstagram, IconBrandLinkedin, IconHome, IconMail, IconPaperBagOff, IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-row sm:flex-row lg:flex-col space-x-3 sm:space-x-4 lg:space-x-0 space-y-0 sm:space-y-0 lg:space-y-4">
            <IconHome className="h-5 w-4 text-neutral-200 dark:text-neutral-300" />
            <Link className="hover:text-white transition-colors duration-300" href="/">
              Home
            </Link>
            <IconPaperBagOff className="h-5 w-4 text-neutral-200 dark:text-neutral-300" />
            <Link className="hover:text-white transition-colors duration-300" href="/services">
              Services
            </Link>
            <IconMail className="h-5 w-4 text-neutral-200 dark:text-neutral-300" />
            <Link className="hover:text-white transition-colors duration-300" href="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-row sm:flex-row lg:flex-col space-x-3 sm:space-x-4 lg:space-x-0 space-y-0 sm:space-y-0 lg:space-y-4">
            <IconBrandFacebook className="h-5 w-4 text-neutral-200 dark:text-neutral-300" />
            <Link className="hover:text-white transition-colors duration-300" href="https://github.com/Nishan456singh">
              Facebook
            </Link>
            <IconBrandInstagram className="h-5 w-4 text-neutral-200 dark:text-neutral-300" />
            <Link className="hover:text-white transition-colors duration-300" href="https://www.instagram.com/officialsinghnishan/">
              Instagram
            </Link>
            <IconBrandLinkedin className="h-5 w-4 text-neutral-200 dark:text-neutral-300" />
            <Link className="hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/nishan-singh-32183a253/">
              LinkedIn
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-row sm:flex-row lg:flex-col space-x-3 sm:space-x-4 lg:space-x-0 space-y-0 sm:space-y-0 lg:space-y-4">
            <IconBrandGmail className="h-5 w-4 text-neutral-200 dark:text-neutral-300" />
            <Link className="hover:text-white transition-colors duration-300" href="mailto:">
              Email
            </Link>
            <IconPhoneCall className="h-5 w-4 text-neutral-200 dark:text-neutral-300" />
            <Link className="hover:text-white transition-colors duration-300" href="tel:+1325732518">
              Phone
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-md pt-8">© 2024 TriValley Airporter. All rights reserved.</p>
      <p className="text-center text-xs pt-2">
        © Design & Developed By {" "}
        <a href="https://nishansingh.pro" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">
          Nishan Singh
        </a>
      </p>
    </footer>
  );
}

export default Footer;