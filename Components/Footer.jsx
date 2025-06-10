import React from "react";
import { Fot1, Fot2 } from ".";

const Footer = () => {
  const footerNav = [
    {
      href: "javascript:void()",
      name: "Terms",
    },
    {
      href: "javascript:void()",
      name: "License",
    },
    {
      href: "javascript:void()",
      name: "Privacy",
    },
    {
      href: "javascript:void()",
      name: "About",
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img src="https://www.floatui.com/logo.svg" className="w-32" />
            <p className="max-w-md">
              Float UI is a design system and component library built with
              React. It provides a set of pre-designed components that can be
              easily customized to fit your needs.
            </p>

            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNav.map((item, index) => (
                <li className="text-gray-800 hover:text-gray-500 duration-150">
                  <a key={index} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 font-semibold">Get the app</p>
            <div className="flex items-center gap-3 mt-3 sm:block">
              <a href="javascript:void()">
                <Fot1 />
              </a>
              <a href="javascript:void()">
                <Fot2 />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 py-10 border-t md:text-center">
          <p>© 2025 KU Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
