import { ethers } from "ethers";
import { useState, useEffect } from "react";

export const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initProvider = async () => {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
      }
    };

    initProvider();
  }, []);

  if (!provider) return <div>Loading Web3...</div>;

  return children;
};
