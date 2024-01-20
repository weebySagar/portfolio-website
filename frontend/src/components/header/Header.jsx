import React from "react";
import Image from "next/image";
import Link from "next/link";

import "@/styles/header/_header.scss";
import { findValueByKey } from "@/utils/helper";
import NavigationMenu from "./NavigationMenu";
import NavigationBrand from "./NavigationBrand";
import NavigationSocialLinks from "./NavigationSocialLinks";

async function getHeader() {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/header?populate=deep"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data in header");
    }
    const { data } = await response.json();
    return data?.attributes;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Header() {
  const data = await getHeader();

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col">
            <NavigationBrand navigationBrand={data?.NavigationBrand} />
          </div>
          <div className="col d-flex justify-content-center navbar-menu-wrapper">
            <NavigationMenu navigationMenu={data?.NavigationMenu} />
          </div>
          <div className="col d-flex justify-content-end">
            <NavigationSocialLinks socialLinks={data?.SocialLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
