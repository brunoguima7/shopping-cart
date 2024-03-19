import { UseShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatter"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {

    const { removeFromCart } = UseShoppingCart()

    const item = storeItems.find(i => i.id === id)

    if (item == null) return null

    return (
        <>
            <div className="flex m-2 md:m-6 border rounded-xl bg-slate-50 justify-between h-40 md:h-[9.25rem]">
                <div className="flex">
                    <div className="md:m-4 border mx-2 my-6 md:my-4 w-24 h-[6.10rem] md:w-28 md:h-[7.10rem]">
                        <img src={item.imgUrl} className="w-24 h-24 md:w-28 md:h-28 bg-white"/>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-8 my-4">
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
                            <div className="flex flex-col text-sm ">
                                <div className="font-semibold w-32 md:w-48">
                                    {item.name}
                                </div>
                                <div className="text-sm text-slate-600">
                                    {formatCurrency(item.price)}
                                </div>
                            </div>
                            <div>
                                {quantity > 1 && (
                                    <div className="md:text-sm text-blue-500">
                                        {quantity}x
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="text-lg font-semibold">
                            {formatCurrency(item.price)}
                        </div>
                    </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="m-[0.35rem] md:m-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round" className="border rounded-md p-2">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    <line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
                </svg>
                </button>
            </div>
        </>
    )
}