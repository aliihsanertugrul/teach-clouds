import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({type="multi"}) => {
  return (
    <Link className="navbar-brand" href="/">
      <Image
        src={`/images/logo/logo-${type}.png`}
        alt={config.project.name}
        width={208}
        height={48}
      />
    </Link>
  );
};

export default Logo;
