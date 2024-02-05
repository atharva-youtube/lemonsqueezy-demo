"use client";

import axios from "axios";
import Image from "next/image";

export default function Home() {
  const buyProduct1 = async () => {
    try {
      const response = await axios.post("/api/purchaseProduct", {
        productId: "240908",
      });

      console.log(response.data);

      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      console.error(err);
      alert("Failed to buy product #1");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={buyProduct1} className="p-3 border border-white">
        Buy product #1 for 1500 INR
      </button>
    </main>
  );
}
