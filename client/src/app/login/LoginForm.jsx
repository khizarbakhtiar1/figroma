"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const fetchWalletAddress = async () => {
      try {
        if (typeof window.ethereum !== "undefined") {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          setWalletAddress(accounts[0]);
        } else {
          console.error("MetaMask is not installed or not enabled.");
        }
      } catch (error) {
        console.error("Error fetching wallet address:", error);
      }
    };
    fetchWalletAddress();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Wallet Address:", walletAddress); // Debug log
      const lowerCaseWalletAddress = walletAddress.toLowerCase();

      if (
        lowerCaseWalletAddress === "0x3baf151492c11e3a883192ad635c27d9a1eb88b2"
      ) {
        window.location.href = "/admin";
      } else if (
        lowerCaseWalletAddress === "0x8f2d5bdb4f7c380e05acea2950de9d03d9e75f4f"
      ) {
        window.location.href = "/institute";
      } else if (
        lowerCaseWalletAddress === "0x82a0a98658ba88d518f430eacb1d72e8be4046c7"
      ) {
        window.location.href = "/higher-authority";
      } else {
        console.error("Unknown wallet address.");
      }
    } catch (error) {
      console.error("Error determining user role:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen py-12">
      <Card className="my-10 py-16">
        <CardHeader>
          <CardTitle>Wallet Address</CardTitle>
          <CardDescription>
            Enter your wallet address to access the appropriate page.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="wallet-address">Wallet Address</Label>
              <Input
                id="wallet-address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                readOnly
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
