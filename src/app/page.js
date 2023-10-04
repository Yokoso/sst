'use client';

import Link from "next/link";
import { orderNumberList } from "@/lib/renderingLists";
import { useState } from "react";


const fetchedOrderList = orderNumberList.map(order => 
  <Link href={`/order/${order}`} key={order}>
    <li>{ order }</li>
  </Link>);

  export default function Home() {
    const [userOrderInput, setUserOrderInput] = useState(0);

    const handleChange = (e) => {
      setUserOrderInput(e.target.value);
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/order/">
        <button className="bg-blue-300 hover:bg-blue-400 p-2">
          Wyszukaj zamówienie
        </button>
      </Link>
      <input 
        type="number"
        id="orderId"
        name="orderId"
        onChange={handleChange}
        value={userOrderInput}
      />
      <Link href={`/order/${userOrderInput}`}>
        <button className="bg-blue-300 hover:bg-blue-400 p-2">
          Idź do zamówienia
        </button> 
      </Link>
      {fetchedOrderList}
    </main>
  )
}
