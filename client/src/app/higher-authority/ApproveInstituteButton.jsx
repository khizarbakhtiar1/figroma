"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import IdentityRegistryABI from "../../../../frontend/artifacts/contracts/IdentityRegistry.sol/IdentityRegistry.json"; // Make sure to import your ABI
const identityRegistryContract = "0x2A02EA91c93974D46533Abf1746061FA8c99352E";

const ApproveInstituteButton = () => {
  const approveInstitute = async () => {
    try {
      // Request access to the user's Ethereum account
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Create a new provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Create a new contract instance
      const contract = new ethers.Contract(
        identityRegistryContract,
        IdentityRegistryABI,
        signer
      );

      // Call the approveInstitute function
      const tx = await contract.approveInstitute();
      await tx.wait();

      console.log("Institute approved successfully");
    } catch (error) {
      console.error("Error approving institute:", error);
    }
  };

  return (
    <div>
      <Button
        variant="secondary"
        size="sm"
        className="bg-[#3B82F6] text-white hover:bg-[#2563EB] hover:text-white"
        onClick={approveInstitute}
      >
        Approve Institute
      </Button>
    </div>
  );
};

export default ApproveInstituteButton;
