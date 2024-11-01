import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="background-color rounded-br-[200px] p-[100px]">
      <div className="container m-auto">
        <h1 className="text-[40px] text-center">
          Sell your Food Around your area on{" "}
          <span className="primary-green">Amr Food</span>
        </h1>
        <p className="dark text-center text-[20px]">
          Amr Food is a platform where you can buy and sell food around your
          area. We will do everything for you to make easy your food business
        </p>

        <div className="text-center mt-5">
          <Link
            className="text-[20px] rounded-full border-[#333333] dark border-2 px-8 py-2"
            href={"/register"}
          >
            Be a seller
          </Link>
        </div>
      </div>
    </div>
  );
}
