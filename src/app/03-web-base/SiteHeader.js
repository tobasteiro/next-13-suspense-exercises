import React from "react";
import Link from "next/link";
import Spinner from "@/components/Spinner";

import { getNavLinks } from "@/helpers/web-base-helpers";

async function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <React.Suspense fallback={<Spinner />}>
        <HeaderNav />
      </React.Suspense>
    </header>
  );
}

async function HeaderNav() {
  // Only show the first 4 links in the header.
  const navLinks = await getNavLinks();

  return (
    <nav>
      <ol className="header-nav-links">
        {navLinks.map(({ slug, label, href, type }) => (
          <li key={slug}>
            <Link href={href} className={`header-nav-link ${type}`}>
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default SiteHeader;
