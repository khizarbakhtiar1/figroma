"use client";
import React, { useState } from "react";
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
import Link from "next/link";

export function DocumentVerificationForm() {
  const [showResults, setShowResults] = useState(false);

  const handleVerifyClick = (event: React.FormEvent) => {
    event.preventDefault();
    setShowResults(true);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md sm:p-10">
      <CardHeader>
        <CardTitle>Verify Document</CardTitle>
        <CardDescription>
          Enter the token ID to verify the authenticity of your document.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleVerifyClick}>
          <div className="space-y-2">
            <Label htmlFor="token">Token ID</Label>
            <Input
              id="token"
              type="text"
              placeholder="Enter your token ID"
              pattern="^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$"
              required
            />
            <p className="text-xs text-muted-foreground">
              The token ID should be in the format
              XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
            </p>
          </div>
          <Button type="submit" className="w-full">
            Verify
          </Button>
        </form>
      </CardContent>
      {showResults && (
        <CardFooter>
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Verification Results</h4>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-muted-foreground">Document Owner:</p>
                <p>John Doe</p>
                <p className="text-muted-foreground">Document Type:</p>
                <p>Driver's License</p>
                <p className="text-muted-foreground">Issuing Institute:</p>
                <p>Department of Motor Vehicles</p>
                <p className="text-muted-foreground">Issuance Date:</p>
                <p>2021-05-15</p>
                <p className="text-muted-foreground">Verification Status:</p>
                <p className={`${true ? "text-green-500" : "text-red-500"}`}>
                  {true ? "Verified" : "Not Verified"}
                </p>
                <p className="text-muted-foreground">Approving Authority:</p>
                <p>John Smith, Chief Compliance Officer</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    width="80"
                    height="80"
                    alt="QR Code"
                  />
                  <Link
                    href="#"
                    className="text-primary underline"
                    prefetch={false}
                  >
                    Share Document
                  </Link>
                </div>
                <Button variant="outline">Download Certificate</Button>
              </div>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
