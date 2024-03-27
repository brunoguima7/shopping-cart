import { UseShoppingCart } from "../context/ShoppingCartContext"
import "../globals.css"
import { NavLink } from "react-router-dom"

export default function Navbar() {

  const { changeCart, cartQuantity } = UseShoppingCart()

  return (
    <>
      <div className="fixed w-full top-0 shadow-md h-[4.5rem] bg-white">
        <div className="flex flex-row justify-end md:justify-between mx-[0.65rem]">
          <NavLink to="/" className="hidden md:flex text-blue-500 text-2xl font-medium my-4 ml-4">Gamer Products</NavLink>
          <div className="flex my-3">
            <div className="flex space-x-1 md:space-x-4 mr-32 md:mr-16">
              <NavLink to="/" className="text-lg text-slate-800 hover:bg-slate-50 hover:text-blue-500 my-1 mx-2 py-1 px-4 h-10 md:px-6 rounded-md font-medium">Home</NavLink>
              <NavLink to="/store" className="text-lg text-slate-800 hover:bg-slate-50 hover:text-blue-500 my-1 mx-2 py-1 px-4 h-10 md:px-6 rounded-md font-medium">Store</NavLink>
            </div>
            <div>
              <button onClick={changeCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" className="border p-1 rounded-md hover:bg-slate-50">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <div className="rounded-full bg-red-500 flex justify-center text-white w-5 h-5 absolute top-2 right-[0.10rem] text-sm">
                  {cartQuantity}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
