import React, { useState} from 'react';
import { navbarList } from '@/lib/renderingLists';
import Navbar from '@/components/navbar/Navbar';
import OrderDetails from './orderDetails';

export default function OrderModal() {
    const [showModal, setShowModal] = useState(false);
    const [hovered, setHovered] = useState(false);
   
    const toggleHover = () => {
        setHovered(!hovered);
        console.log(hovered);
    }

    return (
        <>
          <button
            className="bg-blue-500 text-white hover:bg-blue-600"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Modal
          </button>
          {showModal ? (
            <>
              <div
                className={`modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${!hovered ? 'opacity-100': 'opacity-0'}`}
              >
                <div className="relative w-auto my-6 mx-auto ">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <div className="tabs">

                          <Navbar navbarList={navbarList} />

                      </div>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">

                    {/* <OrderDetails /> */}

                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-blue-600 text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                      >
                        Podejrzyj
                      </button>
                      
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Zamknij
                      </button>
                      <button
                        className="bg-emerald-500 text-white hover:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Zapisz
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
    );
}
