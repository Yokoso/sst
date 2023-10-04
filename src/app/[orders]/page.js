'use client';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import { navbarList, countryList } from '@/lib/renderingLists';

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

        <div className="flex flex-row space-x-4">
          <section className="clientPersonalInfo">
            <h3 className="text-2xl">Dane klienta</h3>
            <form className="flex flex-col ">
              <label htmlFor="id">ID/Nick/Skrót</label>
              <input type="text" id="id" name="id" />
              
              <label htmlFor="name">Nazwa</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="country">Kraj:</label>
              <select name="country" id="country">
                <option value="">-</option>
                { countryList.map((country) => <option value={country} key={country}>{country}</option>) }
              </select>

              <label htmlFor="address">Adres</label>
              <input type="text" id="address" name="address" />

              <label htmlFor="zipcode">Kod</label>
              <input type="text" id="zipcode" name="zipcode" />
              
              <label htmlFor="city">Miejscowość</label>
              <input type="text" id="city" name="city" />

              <label htmlFor="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </form>
          </section>

          <section className="clientShippmentInfo">
          <h3 className="text-2xl">Adres do wysyłki</h3>
            <form className="flex flex-col ">
              <label htmlFor="name">Nazwa</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="country">Kraj:</label>
              <select name="country" id="country">
                <option value="">-</option>
                { countryList.map((country) => <option value={country} key={country}>{country}</option>) }
              </select>

              <label htmlFor="address">Adres</label>
              <input type="text" id="address" name="address" />

              <label htmlFor="zipcode">Kod</label>
              <input type="text" id="zipcode" name="zipcode" />
              
              <label htmlFor="city">Miejscowość</label>
              <input type="text" id="city" name="city" />

            </form>
          </section>
          
          <section className="clientInvoiceInfo">

          </section>
        </div>
        


        <button onClick={toggleBool} className='bg-red-300 hover:bg-red-400 p-2'>test flag</button>
        <Link href="/"><h3 className='bg-blue-300 hover:bg-blue-400 p-2'>Powrót na stronę główną</h3></Link>
      </main>
    </>
  )
}