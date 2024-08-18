"use client";
import React, { useState, useEffect, use } from "react";
import { Button } from "@/components/ui/button";
import PurchaseCreditButton from "./PurchaseCreditButton";

export function Pricing() {
  const [instituteAddress, setInstituteAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchInstituteAddress = async () => {
      try {
        const address = "0x8F2D5BdB4F7C380e05AcEA2950dE9D03d9E75F4f";
        setInstituteAddress(address);
      } catch (error) {
        console.error("Error fetching Institute address:", error);
        setErrorMessage(
          "Failed to fetch Institute address. Please try again later."
        );
      }
    };

    fetchInstituteAddress();
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 flex items-start justify-center">
      <div className="container px-4 md:px-6">
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div className="mx-1">
              <h3 className="text-2xl font-bold text-center">Basic</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">$49</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Credits: 100
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Cost per credit: $0.50
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <PurchaseCreditButton
                instituteAddress={instituteAddress}
                planType={1}
                credits={100}
                price={49}
                className="w-full"
              />
            </div>
          </div>
          <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div className="mx-1">
              <h3 className="text-2xl font-bold text-center">Pro</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">$199</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                  Credits: 500
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Cost per credit: $0.40
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <PurchaseCreditButton
                instituteAddress={instituteAddress}
                planType={2}
                credits={500}
                price={199}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500"
              />
            </div>
          </div>
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div className="mx-1">
              <h3 className="text-2xl font-bold text-center">Enterprise</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">$449</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Credits: 1,500
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Cost per credit: $0.30
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <PurchaseCreditButton
                instituteAddress={instituteAddress}
                planType={3}
                credits={1500}
                price={449}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
