import React from "react";
import { Button } from "@/components/ui/button";

const RemoveAdminButton = ({ admin, admins, setAdmins }) => {
  const handleRemoveAdmin = () => {
    setAdmins(admins.filter((a) => a.id !== admin.id));
  };

  return (
    <div>
      <Button
        variant="outline"
        className="bg-[#EF4444] text-white hover:bg-[#DC2626] focus:ring-[#EF4444]"
        onClick={handleRemoveAdmin}
      >
        Remove
      </Button>
    </div>
  );
};

export default RemoveAdminButton;
