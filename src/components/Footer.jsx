import React from "react";
import { Link } from "react-router-dom";
import { FooterLogo } from "./ui/FooterLogo";
import { Wrapper } from "./ui/Wrapper";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="bg-black py-6 mt-auto text-center">
      <Wrapper>

        <div className="grid gap-y-5 grid-cols-1 md:grid-cols-12 items-start">
          <div className="flex justify-center md:col-span-3">
            <div className="sm:block text-white font-fuzzy">
              <FooterLogo stack="hidden" size="lg" className="font-fuzzy" />
            </div>
          </div>

          <div className="md:col-span-3      ">
            <h2 className="text-lg font-bold font-    mt-4 text-white text-center lg:text-left">
              Explore Mkhasa
            </h2>
            <ul className="text-app-ash-2   text-center lg:text-left">
              <li>
                <Link
                  to="/about"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3       mt-4">
            <h2 className="text-lg font-bold font-    text-white text-center lg:text-left">
              Contact Us
            </h2>
            <div className="text-app-ash-2 mt-4 text-center lg:text-left       ">
              {/* <p>House 92, Dele Orisabiyi Street Okota Lagos State</p> */}
              <p className="w-full py-2 inline-block">Call Us: <span className="font-NimbusSan"> +2349013898261</span></p>
              <p className="w-full py-2 inline-block">Contact Email: info@mkhasa.com</p>
              <p className="w-full py-2 inline-block">Help Email: support@mkhasa.com</p>
            </div>
          </div>

          <div className="md:col-span-3       0">
            <h2 className="text-lg font-bold font-    text-white text-center md:pr-20 md:text-right">
              Socials
            </h2>
            <ul className="flex text-app-ash-2 justify-center gap-3 mt-4 md:justify-end">
              <li>
                <Link

                  to="https://www.instagram.com/_mkhasa_"
                  target='_blank'

                  className="p-1 inline-block hover:scale-105 hover:text-app-red"
                  aria-label="link to Mkhasa instagram page"
                >
                  <Icon icon="mdi:instagram" style={{ fontSize: 32 }} />
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com/Mkhasa_"
                  target="_blank"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa X (formerly known as twitter) page"
                >
                  <Icon
                    icon="bi:twitter-x"
                    style={{ fontSize: 32 }}
                    className="hover:text-app-red"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/profile.php?id=61559801264240&mibextid=ZbWKwL"
                  target="_blank"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa meta (formerly known as facebook) page"
                >
                  <Icon
                    icon="lucide:facebook"
                    style={{ fontSize: 32 }}
                    className="hover:text-app-red"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa youtube page"
                >
                  <Icon
                    icon="ant-design:youtube-outlined"
                    style={{ fontSize: 32 }}
                    className="hover:text-app-red"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.tiktok.com/@_mkhasa_?_t=8mdu7onNLSH&_r=1"
                  target="_blank"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa tiktok page"
                >
                  <Icon
                    icon="ant-design:tik-tok-outlined"
                    style={{ fontSize: 32 }}
                    className="hover:text-app-red "
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="md:hidden flex mt-3 justify-start md:col-span-3 ">
          <div className="sm:block text-white font-fuzzy">
            <Logo backGroundColor="black" />
          </div>
        </div> */}

        <p className="text-app-ash-2 text-sm text-left pt-10 sm:text-right md:text-center      ">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
