"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { addAdmin } from "@/utils/ethers";
import { ethers } from "ethers";

const AddAdminButton = ({ admins, setAdmins }) => {
  const [newAdminAddress, setNewAdminAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddAdmin = async () => {
    if (
      newAdminAddress.trim() !== "" &&
      ethers.utils.isAddress(newAdminAddress)
    ) {
      setIsLoading(true);
      setError(null);
      try {
        await addAdmin(newAdminAddress);
        setAdmins([
          ...admins,
          { id: `ADMIN-${admins.length + 1}`, address: newAdminAddress },
        ]);
        setNewAdminAddress("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      setError("Please enter a valid Ethereum address");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        className="py-2 border flex-1 border-gray-300 rounded-lg text-center"
        type="text"
        value={newAdminAddress}
        onChange={(e) => setNewAdminAddress(e.target.value)}
        placeholder="New Admin Address"
      />
      <Button onClick={handleAddAdmin} disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Admin"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddAdminButton;
