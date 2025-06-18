// components/Breadcrumb.tsx
"use client";

import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Chia URL theo dấu "/"
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Tạo từng cấp breadcrumb
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment).replace(/-/g, " ");

    return {
      href,
      label: label.charAt(0).toUpperCase() + label.slice(1),
    };
  });

  return (
    <nav aria-label="breadcrumb" className=" sm:w-[100rem] w-[40rem] bg-white">
      <ol className="flex ml-20 pt-5 pb-5">
        <li>
          <Link href="/" className="hover:underline">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faHouse} /> Home
            </div>
          </Link>
        </li>
        {breadcrumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex gap-2 text-gray-800 ml-2">
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            {i === breadcrumbs.length - 1 ? (
              <span className="">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:underline">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
