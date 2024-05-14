"use client";
import { Navbar } from "keep-react";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import pageLink from "@/data/NavbarLink.json"

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className=" bg-[#1F2937]">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden min-h-16 items-center justify-between gap-8"
        >
          {pageLink.map((link) => (
            <p className="text-[#B5CBCA]" key={link.id}>
              {link.page}
            </p>
          ))}
        </Navbar.Container>
        <Navbar.Collapse collapseType="sidebar" className="bg-slate-500 ">
          <Navbar.Container
            tag="ul"
            className="flex text-[#B5CBCA] flex-col gap-5"
          >
            {pageLink.map((link) => (
              <p className="text-[#B5CBCA]" key={link.id}>
                {link.page}
              </p>
            ))}
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <IoMdNotificationsOutline className="text-[#B5CBCA] h-8 w-6" />
            <Navbar.Brand>
              <Image
                src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_640.png"
                alt="keep"
                width="30"
                height="30"
              />
            </Navbar.Brand>
          </Navbar.Container>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
