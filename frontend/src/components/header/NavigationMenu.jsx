"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { findValueByKey } from "@/utils/helper";


const NavigationMenu = ({navigationMenu}) => {
    const pathName = usePathname();

  return (
    <div className="navbar-menu">
      {navigationMenu?.map((navItem) => (
        <Link href={navItem?.Link} className={pathName == navItem?.Link ?"active" :""} key={navItem?.id} title={!navItem?.Link.slice(1) ? 'Home' :navItem?.Link.slice(1)}>
          <Image
            src={findValueByKey(navItem, "Logo")?.url}
            width="35"
            height="35"
            key={navItem?.id}
            alt={findValueByKey(navItem, "Logo").alternativeText || 'Menu Logo'}
          />
        </Link>
      ))}
    </div>
  );
};

export default NavigationMenu;
