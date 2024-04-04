import { UseShoppingCart } from "../context/ShoppingCartContext"
import "../globals.css"
import { formatCurrency } from "../utilities/formatter"

interface StoreItemProps {
    id: number
    name: string
    price: number
    imgUrl: string
}

export default function StoreItem({ id, name, price, imgUrl }:StoreItemProps) {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = UseShoppingCart()

    const quantity = getItemQuantity(id)

    return (
        <>
            <div className="flex flex-col w-[22rem] h-[18rem] md:w-[22-rem] md:h-[21rem] border rounded-xl">
                <div className="flex justify-center my-4">
                    <img src={imgUrl} className="w-36 h-36 md:w-48 md:h-48"/>
                </div>
                <div className="flex flex-row text-sm md:text-md justify-between">
                    <span className="text-slate-800 font-medium p-2">{name}</span>
                    <span className="text-slate-600 p-2">{formatCurrency(price)}</span>
                </div>
                <div className="flex justify-center">
                    {quantity === 0 ? (
                        <button className="px-8 py-2 my-2 bg-blue-500 rounded-xl font-medium text-white hover:bg-blue-600 shadow-md shadow-slate-200" onClick={() => increaseCartQuantity(id)}>+ Add to Cart</button>
                    ) : (
                        <div className="flex m-2 border rounded-xl space-x-2">
                            <div className="flex font-medium justify-center m-2">In Cart</div>
                            <div className="space-x-4">
                                <button className="px-2 py-1 m-1 w-8 bg-blue-500 rounded-xl font-medium text-white hover:bg-blue-600" onClick={() => decreaseCartQuantity(id)}>-</button>
                                <span className="px-2 py-1 m-1 bg-slate-50 border rounded-xl font-medium">{quantity}</span>
                                <button className="px-2 py-1 m-1 w-8 bg-blue-500 rounded-xl font-medium text-white hover:bg-blue-600" onClick={() => increaseCartQuantity(id)}>+</button>
                            </div>
                            <div>
                                <button className="px-2 py-1 m-1 bg-red-500 rounded-xl font-medium text-white hover:bg-red-600" onClick={() => removeFromCart(id)}>Remove</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

