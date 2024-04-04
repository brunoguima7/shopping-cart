import { NavLink } from "react-router-dom"
import "../globals.css"

export default function Home() {

    return (
        <>
            <div className="flex text-center mx-12 my-36 md:mx-44 md:my-44">
                <div className="flex flex-col space-y-16 md:space-y-24">
                    <div className="text-4xl text-slate-600 font-semibold">
                        Bem vindo!
                    </div>
                    <div className="text-xl md:text-3xl text-slate-500">
                        Este é um site criado a fins de estudo para um carrinho de compras funcional, simulando uma loja de periféricos Gamer.
                        Sinta-se à vontade para testá-lo!
                    </div>
                    <div>
                        <NavLink to="/store" className="py-2 px-4 my-2 bg-blue-500 rounded-xl font-medium text-white hover:bg-blue-600 w-44 text-center text-xl shadow-md shadow-slate-300">Vá as compras!</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

