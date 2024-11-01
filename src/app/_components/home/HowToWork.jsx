import { FaCheckCircle } from "react-icons/fa";
import React from "react";

export default function HowToWork() {
  return (
    <>
      <div className="container m-auto flex items-center">
        <div className="w-6/12">
          <img className="w-full" src="/images/howtowork.png" alt="no image" />
        </div>
        <div className="w-6/12">
          <h1 className="text-[30px] mb-4">
            How <span className="primary-green">Amr Food</span> work
          </h1>
          <ol className="list-decimal">
            <li className="flex items-center mb-3">
              <FaCheckCircle className="text-primary-green mr-2" />
              <span>Sign up as a Seller.</span>
            </li>
            <li className="flex items-center mb-3">
              <FaCheckCircle className="text-primary-green mr-2" />
              <span>Add your food items..</span>
            </li>
            <li className="flex items-center mb-3">
              <FaCheckCircle className="text-primary-green mr-2" />
              <span>We will do everything for your sell.</span>
            </li>
            <li className="flex items-center mb-3">
              <FaCheckCircle className="text-primary-green mr-2" />
              <span>Get your order details.</span>
            </li>
            <li className="flex items-center mb-3">
              <FaCheckCircle className="text-primary-green mr-2" />
              <span>Deliver your products yourself</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
