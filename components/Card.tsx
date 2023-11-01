'use client'

import Image from "next/image"
import { useState } from 'react'; // Importe useState

interface Props{
    item: {
        id: number, price: string, src: string, title: string, descrição: string
    }
}

export default function CardCofee({item} : Props){
    const [showCard, setShowCard] = useState(false)
    return(
        <div key={item.id} className="flex gap-2 h-[550px] flex-col items-center justify-between px-4 py-6 bg-white border border-gray-300 w-[300px] hover:shadow-[#c7c7c7] ease-linear duration-300 hover:cursor-pointer hover:shadow-2xl">
        <Image alt={item.title} height={150} width={300} className='object-cover rounded-lg' src={item.src} />
        <h2 className='text-lg font-semibold text-main'>{item.title}</h2>
        <p className='text-xs text-gray-800 text-center'>{item.descrição}</p>
        <span className='text-main font-bold'>R$: {item.price}</span>
        <button onClick={() => setShowCard(true)} className='bg-main px-10 py-4 text-white rounded-md'>Comprar</button>

        <div className={`flex justify-center absolute left-[50%] top-[calc(50%-250px)] items-center h-[500px] w-[400px] bg-slate-200 ${showCard ? 'flex' : 'hidden'}`}>
        <div key={item.id} className="flex gap-2 h-[550px] flex-col items-center justify-between px-4 py-6 bg-white border border-gray-300 w-[300px] hover:shadow-[#c7c7c7] ease-linear duration-300 hover:cursor-pointer hover:shadow-2xl">
        <Image alt={item.title} height={150} width={300} className='object-cover rounded-lg' src={item.src} />
        <h2 className='text-lg font-semibold text-main'>{item.title}</h2>
        <p className='text-xs text-gray-800 text-center'>{item.descrição}</p>
        <span className='text-main font-bold'>R$: {item.price}</span>
      </div>
</div>
      </div>
    )
}