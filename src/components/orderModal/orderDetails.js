import React from 'react'
import { countryList } from '@/lib/renderingLists';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function OrderDetails() {
    return (
        <div className="flex flex-row space-x-4 justify-center">
          <section className="clientPersonalInfo">
            <h3 className="text-2xl">Dane klienta</h3>
            <form className="flex flex-col ">
              <label htmlFor="id" >ID</label>
              <input type="text" id="id" name="id" disabled className="disabled:bg-slate-50 disabled:text-slate-500" />
              <hr className='bg-black'/>
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
                <input type="text" id="name" name="name"/>

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
          <h3 className="text-2xl">Faktura VAT</h3>
            <form className="flex flex-col ">
                <label htmlFor="name">Nazwa</label>
                <input type="text" id="name" name="name"/>

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

                <label htmlFor="nip">NIP</label>
                <input type="number" id="nip" name="nip" />

            </form>
          </section>
        </div>
    )
}
