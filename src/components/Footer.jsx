import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./ui/Logo";
import { Wrapper } from "./ui/Wrapper";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="bg-black py-6 mt-auto">
      <Wrapper>

        <div className="grid gap-y-5 grid-cols-1 md:grid-cols-12 items-start">
        <div className="hidden md:flex justify-start md:col-span-3">
            <div className="sm:block text-white font-fuzzy">
              <Logo stack="hidden" size="lg" className="font-fuzzy" />
            </div>

          </div>

          <div className="md:col-span-3    font-Helvetica">
            <h2 className="text-lg font-bold font-  font-HelveticaBold mt-4 text-white text-left">
              Explore Mkhasa
            </h2>
            <ul className="text-app-ash-2   text-left">
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

          <div className="md:col-span-3    font-Helvetica mt-4">
            <h2 className="text-lg font-bold font-  font-HelveticaBold text-white text-left">
              CONTACT US
            </h2>
            <div className="text-app-ash-2 mt-4 text-left     font-Helvetica">
              {/* <p>House 92, Dele Orisabiyi Street Okota Lagos State</p> */}
              <p className="py-2">Call Us: <span className="font-NimbusSan"> 09013898261</span></p>
              <p className="py-2">Email: info@mkhasa.com</p>

              <h3 className="text-lg font-bold font-  font-HelveticaBold text-white mt-4">Support/Sales Team</h3>
              <p className="py-2">Call Us: <span className="font-NimbusSan">09131451391 </span></p>

              <p className="py-2">Email: sales@mkhasa.com</p>
              <p className="py-2">Email: support@mkhasa.com</p>
            </div>
          </div>

          <div className="md:col-span-3    font-Helvetica 0">
            <h2 className="text-lg font-bold font-  font-HelveticaBold text-white text-left md:pr-20 md:text-right">
              Socials
            </h2>
            <ul className="flex text-app-ash-2 justify-start gap-3 mt-4 md:justify-end">
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

        <div className="md:hidden flex mt-3 justify-start md:col-span-3 ">
            <div className="sm:block text-white font-fuzzy">
              <Logo backGroundColor="black" />
            </div>
          </div>

        <p className="text-app-ash-2 text-sm text-left pt-10 sm:text-right md:text-center    font-Helvetica">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
