import { UseShoppingCart } from "../context/ShoppingCartContext"
import "../globals.css"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatter"

interface ShopCartProps {
    isOpen: boolean
}

export default function ShopCart({isOpen}: ShopCartProps) {

    const { changeCart, cartItems, cartQuantity } = UseShoppingCart()

    return (
        <>
            {isOpen == true && (
                <>
                    <div onClick={changeCart} className={`${isOpen ? 'w-full h-full bg-black fixed opacity-60 top-0' : 'hidden'}`}>
                    </div>
                    <div className={`${isOpen ? 'w-[20rem] md:w-[30rem] h-full bg-white fixed right-0 top-0 flex flex-col overflow-scroll' : 'hidden'}`}>
                        <div className="flex justify-between">
                            <div className="my-4 ml-[5rem] md:ml-[11rem]">
                                <span className="font-medium text-slate-800 text-3xl">Your Cart</span>
                            </div>
                            <div>
                                <button onClick={changeCart} className="m-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1e293b" stroke-width="2" 
                                    stroke-linecap="round" stroke-linejoin="round" className="p-2 border rounded-lg">
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div>
                                {cartItems.map(item => (
                                    <CartItem key={item.id} {...item} />
                                ))}
                            </div>
                            <div className="flex justify-end m-8">
                                {cartQuantity > 0 ? (
                                    <div className="text-2xl font-semibold text-slate-800">
                                        Total: &nbsp;
                                        {formatCurrency(
                                            cartItems.reduce((total, cartItem) => {
                                                const item = storeItems.find(i => i.id === cartItem.id)
                                                return total + (item?.price || 0) * cartItem.quantity
                                            }, 0)
                                        )}
                                    </div>
                                ) : (
                                    <div className="md:mx-12 my-32 space-y-12">
                                        <div className="text-3xl font-semibold text-slate-500 text-center">
                                            Theres's nothing here right now...  ):
                                        </div>
                                        <div className="text-3xl font-semibold text-slate-500 text-center">
                                            Go shop!
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

