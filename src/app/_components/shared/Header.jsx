import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="bg-transparent">
        <div className="container m-auto p-4 flex items-center justify-between">
          <div className="w-6/12 text-[30px]">Amr Food</div>

          <div className="w-6/12 flex items-center justify-end">
            <Link
              className="dark p-3 px-5 text-[20px] font-[600]"
              href={"/about"}
            >
              About Us
            </Link>

            <Link
              className="dark p-3 px-5 text-[20px] font-[600]"
              href={"/register"}
            >
              Be a seller
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
