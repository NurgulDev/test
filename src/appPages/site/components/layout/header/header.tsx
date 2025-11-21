"use client";
import React from "react";
import style from "./Header.module.scss";
import { useHeaderStore } from "@/stores/useHeaderStore";
import logo from "../../../../../assets/image/logo.png";
import Image from "next/image";
import Link from "next/link";

const Links = [
  {
    name: "Главная",
    href: "/",
  },
    {
    name: "О нас",
    href: "/aboutUs",
  },
    {
    name: "Курсы",
    href: "/courses",
  },
   {
    name: "Контакты",
    href: "/contacts",
  },
];
function Header() {
  const { isOpenProfileMenu, setIsOpenProfileMenu } = useHeaderStore();

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.content}>
          <div className={style.logo}>
            <Image src={logo} alt="logo" width={79} height={58} />
          </div>
         {Links.map((link, index) => (
                    <Link key={index} href={link.href}>
                      {link.name}
                    </Link>
                  ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
