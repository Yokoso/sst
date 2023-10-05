'use client';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import OrderDetails from '@/components/orderModal/orderDetails';
import { navbarList } from '@/lib/renderingLists';

export default function Page() {
  let isClientInfoEqual = true;

  function toggleBool() {
    isClientInfoEqual = !isClientInfoEqual;
    console.log(isClientInfoEqual);
  }
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <h2 className="text-2xl">Szczegóły zamówienia</h2>
        

        <Navbar navbarList={navbarList} />
        {/* <OrderDetails /> */}
        
        <button onClick={toggleBool} className='bg-red-300 hover:bg-red-400 p-2'>test flag</button>
        <Link href="/"><h3 className='bg-blue-300 hover:bg-blue-400 p-2'>Powrót na stronę główną</h3></Link>
      </main>
    </>
  )
}