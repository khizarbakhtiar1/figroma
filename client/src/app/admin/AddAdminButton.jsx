"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const AddAdminButton = ({ admins, setAdmins }) => {
  const [newAdminName, setNewAdminName] = useState("");

  const handleAddAdmin = () => {
    if (newAdminName.trim() !== "") {
      setAdmins([
        ...admins,
        { id: `ADMIN-${admins.length + 1}`, name: newAdminName },
      ]);
      setNewAdminName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newAdminName}
        onChange={(e) => setNewAdminName(e.target.value)}
        placeholder="New Admin Name"
      />
      <Button onClick={handleAddAdmin}>Add Admin</Button>
    </div>
  );
};

export default AddAdminButton;
