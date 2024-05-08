"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNavBar = ({ user }: MobileNavBarProps) => {
  const path = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="Menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            className="flex cursor-pointer items-center gap-1 px-4"
            href="/"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Logo"
              //   className="size-[24px] max-xl:size-14"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-tblack-1">
              Horizon
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    path === link.route || path.startsWith(`${link.route}/`);
                  return (
                    <Link
                      key={link.label}
                      href={link.route}
                      className={cn("sidebar-link", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                      <div className="relative size-6">
                        <Image
                          src={link.imgURL}
                          fill
                          alt={link.label}
                          className={cn({
                            "brightness-50 invert-0": isActive,
                          })}
                        />
                      </div>
                      <p
                        className={cn("sidebar-label", {
                          "!text-white": isActive,
                        })}
                      >
                        {" "}
                        {link.label}
                      </p>
                    </Link>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavBar;
