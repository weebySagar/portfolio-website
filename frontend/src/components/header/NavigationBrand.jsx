import { findValueByKey } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationBrand = ({navigationBrand}) => {

    return (
    <div >
      <Link href={navigationBrand?.Link} >
        <img src={findValueByKey(navigationBrand, "BrandLogo")?.url}  className="navbar-logo"/>
      </Link>
    </div>
  );
};

export default NavigationBrand;
