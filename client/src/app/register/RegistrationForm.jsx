"use client";

import React, { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function Register() {
  const [walletAddress, setWalletAddress] = useState("");
  useEffect(() => {
    const fetchWalletAddress = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setWalletAddress(accounts[0]);
        } catch (error) {
          console.error("Error fetching wallet address:", error);
        }
      } else {
        console.error("MetaMask is not installed");
      }
    };

    fetchWalletAddress();
  }, []);

  const [isInstituteForm, setIsInstituteForm] = useState(true);
  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md sm:p-10">
      <CardHeader>
        <CardTitle>Sign Up!</CardTitle>
        <CardDescription>
          Register as an Institute or Higher Authority
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue={isInstituteForm ? "institute" : "authority"}
          onValueChange={(value) => setIsInstituteForm(value === "institute")}
          className="border-b"
        >
          <TabsList>
            <TabsTrigger value="institute">Institute</TabsTrigger>
            <TabsTrigger value="authority">Higher Authority</TabsTrigger>
          </TabsList>
          <TabsContent value="institute">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="wallet">Wallet Address</Label>
                  <Input id="wallet" value={walletAddress} readOnly />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="institute-type">Institute Type</Label>
                <Select id="institute-type">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select institute type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="school">School</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="higher-authority">Higher Authority</Label>
                <Select id="higher-authority">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select higher authority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="authority1">Authority 1</SelectItem>
                    <SelectItem value="authority2">Authority 2</SelectItem>
                    <SelectItem value="authority3">Authority 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="authority">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="wallet">Wallet Address</Label>
                  <Input id="wallet" value={walletAddress} readOnly />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="authority-type">Authority Type</Label>
                <Select id="authority-type">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select authority type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="accreditation">
                      Accreditation Body
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="jurisdiction">Jurisdiction</Label>
                <Input
                  id="jurisdiction"
                  placeholder="Enter your jurisdiction"
                />
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}
