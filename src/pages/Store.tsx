import "../globals.css"
import storeItems from "../data/items.json"
import StoreItem from "../components/StoreItem"

export default function Store() {

    return (
        <>
            <div className="flex my-32">
                <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                    {storeItems.map((item) => (
                        <div key={item.id}>
                            <StoreItem {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}