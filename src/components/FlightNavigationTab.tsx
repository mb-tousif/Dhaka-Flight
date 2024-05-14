"use client";
import React from "react";
import Link from "next/link";

const pageNavigation = [
  {
    id: "Round Trip",
    page: "Round Trip",
    link: "/",
  },
  {
    id: "One Way",
    page: "One Way",
    link: "/",
  },
  {
    id: "Multi City",
    page: "Multi City",
    link: "/",
  },
];

export default function FlightNavigationTab() {
  const [activePage, setActivePage] = React.useState("Round Trip");
   const handlePageClick = (pageId:string) => {
     setActivePage(pageId);
   };
  return (
    <div className="mb-4">
      <h1 className="container text-2xl text-left pl-8 font-bold border-b-2 text-[#111827] pt-2">
        Master Price
      </h1>
      <div className="flex justify-center pt-6 rounded-2xl">
        <div className="flex">
          {pageNavigation.map((page) => (
            <div key={page.id} className="flex border w-40">
              <Link
                href={page.link}
                onClick={() => handlePageClick(page.id)}
                className={`flex items-end justify-center text-sm text-center mx-auto p-2 w-full ${
                  activePage === page.id ? "bg-[#2E3791] text-white" : ""
                }`}
              >
                {page.page}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
