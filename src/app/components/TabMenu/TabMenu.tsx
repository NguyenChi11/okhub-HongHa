import React from "react";
import styles from "./custom.module.css";
import Image from "next/image";
import { assets } from "@/app/public/assets/data/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Props = {
  toggleMenu: () => void; // hoặc () => boolean, hoặc async () => Promise<void>
};

const TabMenu = ({ toggleMenu }: Props) => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tours", href: "/all-tour" },
    { name: "Activity", href: "/activities" },
    { name: "Destination", href: "/destinations" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];
  return (
    <div className={`h-[40rem] relative ${styles.container}`}>
      <Image
        src={assets.Logo}
        alt=""
        className="absolute top-[1.5rem] left-[5rem]"
      />
      <div className="absolute top-[1.5rem] right-[5rem]" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faCircleXmark} className="text-5xl" />
      </div>
      <div className={`${styles.containerTag}`}>
        <div className={`${styles.containerMenu}`}>
          <ul className="space-y-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between border-b border-white/20 py-4 text-lg font-medium text-white transition-colors hover:text-green-300"
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TabMenu;
