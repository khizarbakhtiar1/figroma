"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import InstituteABI from "../../../frontend/artifacts/contracts/Institute.sol/Institute.json";

const PurchaseCreditButton = ({ instituteAddress, planType }) => {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [error, setError] = useState(null);

  const planDetails = {
    1: { credits: 100, price: 49 },
    2: { credits: 500, price: 199 },
    3: { credits: 1500, price: 499 },
  };

  const purchaseCredits = async () => {
    setIsPurchasing(true);
    setError(null);

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const instituteContract = new ethers.Contract(
        instituteAddress,
        InstituteABI.abi,
        signer
      );

      const plan = planDetails[planType];
      const tx = await instituteContract.purchaseCredits(planType, {
        value: ethers.utils.parseEther(plan.price.toString()),
      });
      await tx.wait();

      console.log(`${plan.credits} credits purchased successfully`);
      // Add callback or state update here to reflect the new credit balance
    } catch (err) {
      console.error("Error purchasing credits:", err);
      setError(err.message);
    } finally {
      setIsPurchasing(false);
    }
  };

  const plan = planDetails[planType];

  return (
    <div>
      <div className="mt-6">
        <Button
          className="w-full"
          onClick={purchaseCredits}
          disabled={isPurchasing}
        >
          {isPurchasing ? "Processing..." : `Get Started`}
        </Button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default PurchaseCreditButton;
